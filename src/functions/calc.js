import { evaluate } from "mathjs";
const SEPARADOR = " = ";
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
  showAlerta("info", "Excluído!");
};
export function separarConta(texto){
  const i = texto.lastIndexOf(SEPARADOR);
  if (i === -1) return { expressao: texto, resultado: null };
  const expressao = texto.slice(0, i);
  const resultado = texto.slice(i + SEPARADOR.length);
  if (!expressao || !resultado) return { expressao: texto, resultado: null };
  return { expressao, resultado };
};
