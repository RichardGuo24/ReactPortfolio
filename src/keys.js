// Global arrow / Enter shortcuts shouldn't hijack typing in a form field
export function isTypingTarget(target)
{
    return target.closest("input, textarea, select, [contenteditable='true']") !== null;
}
