function scrollCaretIntoView(el) {
  const pos = el.selectionStart ?? el.value.length;
  if (!scrollCaretIntoView._canvas) {
    scrollCaretIntoView._canvas = document.createElement("canvas");
  }
  const ctx = scrollCaretIntoView._canvas.getContext("2d");
  const style = getComputedStyle(el);
  ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const caretX = ctx.measureText(el.value.substring(0, pos)).width;
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;
  const visibleWidth = el.clientWidth - paddingLeft - paddingRight;
  if (caretX < el.scrollLeft) {
    el.scrollLeft = caretX;
  } else if (caretX > el.scrollLeft + visibleWidth) {
    el.scrollLeft = caretX - visibleWidth;
  }
};
export function insertAtCursor(inputRef, valor, setValor, text) {
  let el = inputRef.current;
  if (!el) return;
  let startPos = el.selectionStart ?? valor.length;
  let endPos = el.selectionEnd ?? valor.length;
  let newValue =
    valor.substring(0, startPos) + text + valor.substring(endPos);
  let pos = startPos + text.length;
  setValor(newValue);
  requestAnimationFrame(() => {
    el.setSelectionRange(pos, pos);
    scrollCaretIntoView(el);
    el.focus();
  });
};
export function comeco(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  el.setSelectionRange(0, 0);
  scrollCaretIntoView(el);
  el.focus();
};
export function fim(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  let len = el.value.length;
  el.setSelectionRange(len, len);
  scrollCaretIntoView(el);
  el.focus();
};
export function setaEsq(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  if (el.selectionStart > 0) {
    let pos = el.selectionStart - 1;
    el.setSelectionRange(pos, pos);
  }
  scrollCaretIntoView(el);
  el.focus();
};
export function setaDir(inputRef) {
  let el = inputRef.current;
  if (!el) return;
  if ((el.selectionEnd ?? 0) < el.value.length) {
    let pos = (el.selectionEnd ?? 0) + 1;
    el.setSelectionRange(pos, pos);
  }
  scrollCaretIntoView(el);
  el.focus();
};
export const backspace = (inputRef, valor, setValor) => {
  let el = inputRef.current;
  if (!el) return;
  let startPos = el.selectionStart ?? valor.length;
  let endPos = el.selectionEnd ?? valor.length;
  let newValue;
  let pos;
  if (startPos === endPos && startPos > 0) {
    newValue = valor.slice(0, startPos - 1) + valor.slice(endPos);
    pos = startPos - 1;
  } else if (startPos !== endPos) {
    newValue = valor.slice(0, startPos) + valor.slice(endPos);
    pos = startPos;
  } else return;
  setValor(newValue);
  requestAnimationFrame(() => {
    el.setSelectionRange(pos, pos);
    scrollCaretIntoView(el);
    el.focus();
  });
};
