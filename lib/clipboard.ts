export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof document === "undefined") {
    return false;
  }

  // Modern Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to legacy fallback.
    }
  }

  // Legacy fallback
  const textarea = document.createElement("textarea");
  textarea.value = text;

  textarea.setAttribute("readonly", "");

  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.padding = "0";
  textarea.style.border = "0";
  textarea.style.outline = "0";
  textarea.style.boxShadow = "none";
  textarea.style.background = "transparent";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";

  document.body.appendChild(textarea);

  const selection = document.getSelection();
  const originalRange =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.blur();
    document.body.removeChild(textarea);

    if (selection && originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
  }
}