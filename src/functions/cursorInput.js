export function insertAtCursor(inputRef, text) {
  let el = inputRef.current;
  if (!el) return;
  let inputValue = el.value;
  let startPos = el.selectionStart ?? 0;
  let endPos = el.selectionEnd ?? 0;
  let newValue =
    inputValue.substring(0, startPos) + text + inputValue.substring(endPos);
  el.value = newValue;
  let pos = startPos + text.length;
  el.selectionStart = pos;
  el.selectionEnd = pos;
  el.focus();
};
export function comeco(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  el.selectionStart = 0;
  el.selectionEnd = 0;
  el.focus();
};
export function fim(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  let len = el.value.length;
  el.selectionStart = len;
  el.selectionEnd = len;
  el.focus();
};
export function setaEsq(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  if (el.selectionStart > 0) {
    el.selectionStart--;
    el.selectionEnd = el.selectionStart;
  }
  el.focus();
};
export function setaDir(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  if ((el.selectionEnd ?? 0) < el.value.length) {
    el.selectionStart = (el.selectionEnd ?? 0) + 1;
    el.selectionEnd = el.selectionStart;
  }
  el.focus();
};
export const backspace = (inputRef) => {
  let el = inputRef.current;
  if (!el) return;
  let inputValue = el.value;
  let startPos = el.selectionStart ?? 0;
  let endPos = el.selectionEnd ?? 0;
  if (startPos === endPos && startPos > 0) {
    inputValue = inputValue.slice(0, startPos - 1) + inputValue.slice(endPos);
    startPos -= 1;
  } else if (startPos !== endPos) {
    inputValue = inputValue.slice(0, startPos) + inputValue.slice(endPos);
  }
  el.value = inputValue;
  el.selectionStart = el.selectionEnd = startPos;
  el.focus();
};
