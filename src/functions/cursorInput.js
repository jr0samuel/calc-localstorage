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
export function comeco(inputRef, selecao, anchorRef, focusRef) {
  let el = inputRef.current;
  if (!el) return;
  if (selecao) {
    let anchor = anchorRef.current ?? el.selectionStart;
    anchorRef.current = anchor;
    focusRef.current = 0;
    let start = Math.min(anchor, 0);
    let end = Math.max(anchor, 0);
    el.setSelectionRange(start, end, 0 < anchor ? "backward" : "forward");
  } else {
    el.setSelectionRange(0, 0);
  }
  scrollCaretIntoView(el);
  el.focus();
};
export function fim(inputRef, selecao, anchorRef, focusRef) {
  let el = inputRef.current;
  if (!el) return;
  let len = el.value.length;
  if (selecao) {
    let anchor = anchorRef.current ?? el.selectionStart;
    anchorRef.current = anchor;
    focusRef.current = len;
    let start = Math.min(anchor, len);
    let end = Math.max(anchor, len);
    el.setSelectionRange(start, end, len < anchor ? "backward" : "forward");
  } else {
    el.setSelectionRange(len, len);
  }
  scrollCaretIntoView(el);
  el.focus();
};
export function setaEsq(inputRef, selecao, anchorRef, focusRef) {
  let el = inputRef.current;
  if (!el) return;
  if (selecao) {
    let anchor = anchorRef.current ?? el.selectionStart;
    let focus = focusRef.current ?? el.selectionEnd;
    focus = Math.max(0, focus - 1);
    anchorRef.current = anchor;
    focusRef.current = focus;
    let start = Math.min(anchor, focus);
    let end = Math.max(anchor, focus);
    el.setSelectionRange(start, end, focus < anchor ? "backward" : "forward");
  } else {
    if (el.selectionStart !== el.selectionEnd) {
      let pos = el.selectionStart;
      el.setSelectionRange(pos, pos);
    } else if (el.selectionStart > 0) {
      let pos = el.selectionStart - 1;
      el.setSelectionRange(pos, pos);
    }
  }
  scrollCaretIntoView(el);
  el.focus();
};
export function setaDir(inputRef, selecao, anchorRef, focusRef) {
  let el = inputRef.current;
  if (!el) return;
  let len = el.value.length;
  if (selecao) {
    let anchor = anchorRef.current ?? el.selectionStart;
    let focus = focusRef.current ?? el.selectionEnd;
    focus = Math.min(len, focus + 1);
    anchorRef.current = anchor;
    focusRef.current = focus;
    let start = Math.min(anchor, focus);
    let end = Math.max(anchor, focus);
    el.setSelectionRange(start, end, focus < anchor ? "backward" : "forward");
  } else {
    if (el.selectionStart !== el.selectionEnd) {
      let pos = el.selectionEnd;
      el.setSelectionRange(pos, pos);
    } else if (el.selectionEnd < len) {
      let pos = el.selectionEnd + 1;
      el.setSelectionRange(pos, pos);
    }
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
async function copiarTextoParaClipboard(el, texto) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(texto);
      return;
    } catch {
      // cai no fallback abaixo
    }
  }
  const temp = document.createElement("textarea");
  temp.value = texto;
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  el.focus();
};
export async function copiar(inputRef, showAlerta) {
  let el = inputRef.current;
  if (!el) return;
  let startPos = el.selectionStart ?? 0;
  let endPos = el.selectionEnd ?? 0;
  if (startPos === endPos) {
    showAlerta?.("info", "Selecione um trecho para copiar");
    el.focus();
    return;
  }
  let texto = el.value.slice(startPos, endPos);
  await copiarTextoParaClipboard(el, texto);
  el.setSelectionRange(startPos, endPos);
  el.focus();
};
export async function recortar(inputRef, valor, setValor, showAlerta) {
  let el = inputRef.current;
  if (!el) return;
  let startPos = el.selectionStart ?? 0;
  let endPos = el.selectionEnd ?? 0;
  if (startPos === endPos) {
    showAlerta?.("info", "Selecione um trecho para recortar");
    el.focus();
    return;
  }
  let texto = valor.slice(startPos, endPos);
  await copiarTextoParaClipboard(el, texto);
  let newValue = valor.slice(0, startPos) + valor.slice(endPos);
  setValor(newValue);
  requestAnimationFrame(() => {
    el.setSelectionRange(startPos, startPos);
    scrollCaretIntoView(el);
    el.focus();
  });
};
export async function colar(inputRef, valor, setValor, showAlerta) {
  let el = inputRef.current;
  if (!el) return;
  if (!navigator.clipboard?.readText) {
    showAlerta?.("error", "Não foi possível colar (sem suporte neste navegador)");
    return;
  }
  let texto;
  try {
    texto = await navigator.clipboard.readText();
  } catch {
    showAlerta?.("error", "Não foi possível colar (permissão negada)");
    return;
  }
  if (!texto) return;
  let startPos = el.selectionStart ?? valor.length;
  let endPos = el.selectionEnd ?? valor.length;
  let newValue = valor.substring(0, startPos) + texto + valor.substring(endPos);
  let pos = startPos + texto.length;
  setValor(newValue);
  requestAnimationFrame(() => {
    el.setSelectionRange(pos, pos);
    scrollCaretIntoView(el);
    el.focus();
  });
};
