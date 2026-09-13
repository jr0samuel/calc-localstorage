import { evaluate } from "mathjs";
export const calcular = (
    inputRef,
    valor,
    setValor,
    setHistorico,
    showAlerta
) => {
  let el = inputRef.current;
  if (!el) return;
  const valorInput = valor.trim();
  if (!valorInput) {
    showAlerta("warning", "Digite uma expressão para calcular");
    el.focus();
    return;
  }
  try {
    let resultado = evaluate(valorInput);
    setValor(`${valorInput} = ${resultado}`);
    setHistorico(prev => [
      { conta: `${valorInput} = ${resultado}` },
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
    valor,
    setHistorico,
    showAlerta
) => {
  let el = inputRef.current;
  if (!el) return;
  const valorInput = valor.trim();
  if (!valorInput) {
    showAlerta("warning", "Digite algo para salvar");
    el.focus();
    return;
  }
  setHistorico(prev => [
    { conta: valorInput },
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
