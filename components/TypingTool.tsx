"use client";

import { useEffect, useRef, useState } from "react";
import { fetchSuggestions } from "@/lib/googleHttpTransliterate";
import SessionBoard from "./SessionBoard";

export default function TypingTool({
  langCode,
  title,
  subtitle,
  LettersComponent,
}: {
  langCode: string;
  title: string;
  subtitle: string;
  LettersComponent?: React.ComponentType<{
    onInsert: (char: string) => void;
  }>;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [boardLines, setBoardLines] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const STORAGE_KEY = `typebharat-session-board-${langCode}`;

  /* ------------------------------------
     Load board from localStorage
  ------------------------------------ */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBoardLines(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load session board:", err);
    }
  }, [STORAGE_KEY]);

  /* ------------------------------------
     Save board to localStorage
  ------------------------------------ */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boardLines));
    } catch (err) {
      console.error("Failed to save session board:", err);
    }
  }, [boardLines, STORAGE_KEY]);

  /* ---------------- lifecycle ---------------- */

  useEffect(() => {
    setText("");
    setCurrentWord("");
    setSuggestions([]);
  }, [langCode]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      // Ignore shortcuts
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const active = document.activeElement as HTMLElement | null;

      // Do not steal focus from interactive elements
      if (
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.tagName === "SELECT" ||
          active.tagName === "BUTTON" ||
          active.isContentEditable)
      ) {
        return;
      }

      // Only printable characters
      if (e.key.length === 1) {
        textarea.focus();

        // Move cursor to end
        const len = textarea.value.length;
        textarea.setSelectionRange(len, len);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  /* ---------------- helpers ---------------- */

  const extractLastWord = (value: string) => {
    const match = value.match(/(\S+)$/);
    return match ? match[1] : "";
  };

  const processInput = async (value: string) => {
    const lastWord = extractLastWord(value);
    setCurrentWord(lastWord);

    if (!lastWord) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const suggs = await fetchSuggestions(lastWord, langCode, 5);
      setSuggestions(suggs);
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- textarea events ---------------- */

  const handleInput = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    await processInput(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Space → accept first suggestion
    if (e.key === " " && currentWord && suggestions.length > 0) {
      e.preventDefault();
      insertSuggestion(suggestions[0]);
    }
    // 🔥 Ctrl/Cmd + Enter → Add to Session Board
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleAddToBoard();
      return;
    }
  };

  const insertSuggestion = (word: string) => {
    setText((prev) => prev.replace(/(\S+)$/, word) + " ");
    setCurrentWord("");
    setSuggestions([]);

    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = e.clipboardData.getData("text");
    if (!pastedText.trim()) return;

    e.preventDefault();
    setLoading(true);

    try {
      const words = pastedText.split(/\s+/).filter(Boolean);
      const results: string[] = [];

      for (const word of words) {
        try {
          const s = await fetchSuggestions(word, langCode, 1);
          results.push(s[0] || word);
        } catch {
          results.push(word);
        }
      }

      const translated = results.join(" ") + " ";
      setText((prev) => prev + translated);
      setSuggestions([]);
      setCurrentWord("");
    } finally {
      setLoading(false);
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const droppedText =
      e.dataTransfer.getData("text/plain") || e.dataTransfer.getData("text");

    if (!droppedText.trim()) return;

    setLoading(true);

    try {
      const words = droppedText.split(/\s+/).filter(Boolean);
      const results: string[] = [];

      for (const word of words) {
        try {
          const s = await fetchSuggestions(word, langCode, 1);
          results.push(s[0] || word);
        } catch {
          results.push(word);
        }
      }

      setText((prev) => prev + results.join(" ") + " ");
      setSuggestions([]);
      setCurrentWord("");
    } finally {
      setLoading(false);
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  };

  /* ---------------- letters click ---------------- */

  const insertChar = async (char: string) => {
    setText((prev) => prev + char);
    await processInput(text + char);

    requestAnimationFrame(() => {
      textareaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      textareaRef.current?.focus();
    });
  };

  /* ---------------- board ---------------- */

  const handleAddToBoard = () => {
    if (!text.trim()) return;
    setBoardLines((prev) => [...prev, text.trim()]);
    setText("");
    setSuggestions([]);
    setCurrentWord("");
  };

  const handleMoveToEditor = (index: number) => {
    const line = boardLines[index];
    setBoardLines((prev) => prev.filter((_, i) => i !== index));
    setText(line + " ");
    setSuggestions([]);
    setCurrentWord("");
  };

  const handleUpdateLine = (index: number, value: string) => {
    setBoardLines((prev) =>
      prev.map((line, i) => (i === index ? value : line)),
    );
  };

  const handleCopyLine = async (line: string) => {
    await navigator.clipboard.writeText(line);
  };

  const handleDeleteLine = (index: number) => {
    setBoardLines((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCopyAll = async () => {
    await navigator.clipboard.writeText(boardLines.join("\n"));
  };

  const handleReorder = (from: number, to: number) => {
    setBoardLines((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  };

  /* ---------------- render ---------------- */

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-[--color-text-heading]">
        {title}
      </h1>
      <p className="mb-4 text-[--color-text-body]">{subtitle}</p>
      <div className="card p-6">
        <textarea
          ref={textareaRef}
          rows={9}
          className="input-base"
          placeholder="Type here in English..."
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onDrop={handleDrop}
        />

        {/* Suggestions */}
        <div className="suggestion-bar">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton-chip" />
            ))}

          {!loading &&
            suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => insertSuggestion(s)}
                className="suggestion-chip"
              >
                {s}
              </button>
            ))}
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-4 items-start">
        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={handleAddToBoard} className="btn-secondary">
            Add to Board
          </button>
        </div>

        {/* Shortcuts */}
        <div className="text-sm text-[--color-text-muted] bg-gray-50 border rounded-lg p-3">
          <div className="font-semibold mb-2 text-[--color-text-heading]">
            Keyboard shortcuts
          </div>
          <ul className="space-y-1">
            <li>
              <kbd className="font-mono">Space</kbd> → convert word
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + C</kbd> → copy
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + X</kbd> → cut
            </li>
            <li>
              <kbd className="font-mono">Ctrl/Cmd + Enter</kbd> → add to board
            </li>
          </ul>
        </div>
      </div>

      <SessionBoard
        lines={boardLines}
        onUpdateLine={handleUpdateLine}
        onMoveToEditor={handleMoveToEditor}
        onCopyLine={handleCopyLine}
        onDeleteLine={handleDeleteLine}
        onCopyAll={handleCopyAll}
        onReorder={handleReorder}
      />

      {LettersComponent && (
        <div className="mt-24">
          <LettersComponent onInsert={insertChar} />
        </div>
      )}
    </div>
  );
}
