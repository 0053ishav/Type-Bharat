"use client";

import { useState } from "react";

export default function SessionBoard({
  lines,
  onUpdateLine,
  onMoveToEditor,
  onCopyLine,
  onDeleteLine,
  onCopyAll,
  onReorder,
}: {
  lines: string[];
  onUpdateLine: (index: number, newLine: string) => void;
  onMoveToEditor: (index: number) => void;
  onCopyLine: (line: string) => void;
  onDeleteLine: (index: number) => void;
  onCopyAll: () => void;
  onReorder: (from: number, to: number) => void;
}) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [draft, setDraft] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const startEditing = (index: number, line: string) => {
    setEditingIndex(index);
    setDraft(line);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setDraft("");
  };

  const saveEditing = () => {
    if (editingIndex === null) return;

    const clean = draft.trim();
    if (!clean) return;

    onUpdateLine(editingIndex, clean);
    cancelEditing();
  };

  const handleDrop = () => {
    if (dragIndex === null || overIndex === null || dragIndex === overIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }

    onReorder(dragIndex, overIndex);
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-[--color-text-heading]">
          Session Board
        </h2>

        <button
          onClick={onCopyAll}
          disabled={lines.length === 0}
          className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40 cursor-pointer"
        >
          Copy All
        </button>
      </div>

      {lines.length === 0 && (
        <div className="text-sm text-[--color-text-muted] py-6 border rounded bg-gray-50 text-center">
          Saved sentences will appear here.
        </div>
      )}

      <div className="space-y-2">
        {lines.map((line, i) => (
          <div
            key={i}
            draggable={editingIndex === null}
            onDragStart={() => setDragIndex(i)}
            onDragOver={(e) => {
              e.preventDefault();
              setOverIndex(i);
            }}
            onDrop={handleDrop}
            className={`
              flex items-start justify-between gap-3 p-3 border rounded bg-white
              transition
              ${dragIndex === i ? "opacity-40" : ""}
              ${overIndex === i && dragIndex !== i ? "ring-2 ring-orange-300" : ""}
            `}
          >
            {/* LEFT SIDE */}
            <div className="flex-1">
              {editingIndex === i ? (
                <>
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={2}
                    className="w-full border rounded p-2 text-sm focus:outline-none focus:ring"
                  />

                  <div className="flex gap-2 mt-2">
                    <button onClick={saveEditing} className="btn-primary">
                      Save
                    </button>

                    <button onClick={cancelEditing} className="btn-secondary">
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-[--color-text-body]">{line}</div>
              )}
            </div>

            {/* RIGHT ACTIONS */}
            {editingIndex !== i && (
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => startEditing(i, line)}
                  title="Edit inline"
                  className="text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  ✏️
                </button>

                <button
                  onClick={() => onMoveToEditor(i)}
                  title="Move to editor"
                  className="text-sm px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 cursor-pointer"
                >
                  ↗
                </button>

                <button
                  onClick={() => onCopyLine(line)}
                  title="Copy"
                  className="text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  📋
                </button>

                <button
                  onClick={() => onDeleteLine(i)}
                  title="Delete"
                  className="text-sm px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 cursor-pointer"
                >
                  ✕
                </button>
                <span
                  title="Drag to reorder"
                  className="cursor-grab text-gray-400 px-2"
                >
                  ⠿
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
