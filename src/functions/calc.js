import { evaluate } from "mathjs";
export const calcular = (
    inputRef,
    getInputValue,
    setInputValue,
    setHistorico,
    showAlerta
) => {
  let el = inputRef.current;
  if (!el) return;
  let inputValue = getInputValue().trim();
  if (!inputValue) {
    showAlerta("warning", "Digite uma expressão para calcular");
    el.focus();
    return;
  }
  try {
    let resultado = evaluate(inputValue);
    setInputValue(`${inputValue} = ${resultado}`);
    setHistorico(prev => [
      { conta: `${inputValue} = ${resultado}` },
      ...prev
    ]);
    showAlerta("success", "Cálculo salvo!");
    el.focus();
  } catch {
    showAlerta("error", "Cálculo inválido!");
    el.focus();
  }
};
export const salvar = (
    inputRef,
    getInputValue,
    setHistorico,
    showAlerta
) => {
  let el = inputRef.current;
  if (!el) return;
  let inputValue = getInputValue().trim();
  if (!inputValue) {
    showAlerta("warning", "Digite algo para salvar");
    el.focus();
    return;
  }
  setHistorico(prev => [
    { conta: inputValue },
    ...prev
  ]);
  showAlerta("success", "Salvo com sucesso!");
  el.focus();
};
export const excluir = (index, setHistorico, showAlerta) => {
  setHistorico(prev =>
    prev.filter((_, i) => i !== index)
  );
  showAlerta("success", "Excluído!");
};
