import "./calc.css";
import { useEffect, useState, useRef, useContext, useCallback } from "react";
import { handleHead, keyLS } from "../../utils/handleHead.js";
import { Btn, Botao } from "../../components/Btns.jsx";
import { insertAtCursor, comeco, fim, setaEsq, setaDir, backspace, copiar, recortar, colar, mostrarNoDisplay, manterCursorVisible } from "../../functions/cursorInput.js";
import { calcular, salvar, excluir, separarConta } from "../../functions/calc.js";
import Alerta from "../../components/Alertas.jsx";
import { CalcContext } from "../../context/CalcContext.jsx";
export default function Calc(){
    useEffect(() => { handleHead('/calc-icon-vetor-illustration.png', 'Calculadora'); }, []);
    const [historico, setHistorico] = useState(() => {
        try {
            const savedHistorico = localStorage.getItem(keyLS);
            const parsedHistorico = savedHistorico ? JSON.parse(savedHistorico) : [];
            return Array.isArray(parsedHistorico) ? parsedHistorico : [];
        } catch { return []; }
    });
    useEffect(() => { localStorage.setItem(keyLS, JSON.stringify(historico)); }, [historico]);
    const {valor, setValor} = useContext(CalcContext);
    const inputRef = useRef(null);
    const [alerta, setAlerta] = useState(null);
    const alertaId = useRef(0);
    const showAlerta = useCallback(( type, message ) => {
        alertaId.current += 1;
        setAlerta( { id: alertaId.current, type, message } );
    }, []);
    const fecharAlerta = useCallback(() => setAlerta(null), []);
    const valorRef = useRef(valor);
    useEffect(() => { valorRef.current = valor; }, [valor]);
    useEffect(() => {
        const handleKeyDown = e => {
            const foco = document.activeElement === inputRef.current || document.activeElement === document.body;
            if (!foco || e.key !== "Enter") return;
            e.preventDefault();
            if (e.ctrlKey || e.metaKey) salvar( inputRef, valorRef.current, setHistorico, showAlerta );
            else calcular( inputRef, valorRef.current, setValor, setHistorico, showAlerta );
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setValor, setHistorico, showAlerta]);
    const [selecao, setSelecao] = useState(false);
    const anchorRef = useRef(null);
    const focusRef = useRef(null);
    useEffect(() => {
        setSelecao(false);
        anchorRef.current = null;
        focusRef.current = null;
    }, [valor]);
    const toggleSelecao = () => {
        const el = inputRef.current;
        setSelecao(prev => {
            const next = !prev;
            if (next && el) {
                anchorRef.current = el.selectionStart;
                focusRef.current = el.selectionEnd;
            } else {
                anchorRef.current = null;
                focusRef.current = null;
            }
            return next;
        });
        el?.focus();
    };
    useEffect(() => manterCursorVisible(inputRef), [inputRef]);
    const ativarComTeclado = (e, acao) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        e.stopPropagation();
        acao();
    };
    return (
        <section>
            <div className="grid grid-cols-1 gap-x-5">
                <h1>Calculadora</h1>
                <div className="mx-auto -mt-4">
                  {alerta && (
                      <Alerta
                          key={alerta.id}
                          type={alerta.type}
                          message={alerta.message}
                          onClose={fecharAlerta}
                      />
                  )}
                </div>
            </div>
            <div>
                <input ref={inputRef} value={valor} onChange={e => setValor(e.target.value)}
                  id="calcInput" name="inputCalc" inputMode="none" placeholder="Digite uma expressão matemática"
                  className="tab w-full h-10 text-center text-(--color-grey1) border-2 border-(--color-grey1) px-3
                    selection:bg-(--color-ambar) selection:text-(--color-dark1)" />
            </div>
            <div>
                <a className="tab" href="/dicas" target="_blank" rel="noopener noreferrer">
                    <Btn>Dicas</Btn>
                </a>
            </div>
            <div id="btns">
                <div className="max-[400px]:grid max-[400px]:grid-cols-1 min-[401px]:grid min-[401px]:grid-cols-3">
                      <Btn onClick={() => comeco(inputRef, selecao, anchorRef, focusRef)}>Começo</Btn>
                    <div className="flex flex-row justify-between">
                      <Btn onClick={() => setaEsq(inputRef, selecao, anchorRef, focusRef)}>⟵</Btn>
                      <Btn onClick={() => setaDir(inputRef, selecao, anchorRef, focusRef)}>⟶</Btn>
                    </div>
                      <Btn onClick={() => fim(inputRef, selecao, anchorRef, focusRef)}>Fim</Btn>
                </div>
                <div className="max-[400px]:grid max-[400px]:grid-cols-1 min-[401px]:grid min-[401px]:grid-cols-2">
                    <div className="flex flex-row justify-between">
                    <Btn onClick={toggleSelecao} className={selecao ? "selecionando maior" : "nao-selecionando maior"}>Seleção<br/>Trecho</Btn>
                    <Btn onClick={() => copiar(inputRef, showAlerta)} className="maior">Copiar</Btn>
                    </div>
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => recortar(inputRef, valor, setValor, showAlerta)} className="maior">Cortar</Btn>
                    <Btn onClick={() => colar(inputRef, valor, setValor, showAlerta)} className="maior">Colar</Btn>
                    </div>
                </div>
                <div className="grid grid-cols-5">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '+')}>+</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '-')}>−</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '*')}>×</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '/')}>÷</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '^')}>^</Btn>
                </div>
                <div className="grid grid-cols-1">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' ')}>Espaço</Btn>
                </div>
                <div className="grid grid-cols-6">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '(')}>(</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ')')}>)</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '[')}>[</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ']')}>]</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '{')}>{"\u007B"}</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '}')}>{"\u007D"}</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '1')}>1</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '2')}>2</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '3')}>3</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '4')}>4</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '5')}>5</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '6')}>6</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '7')}>7</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '8')}>8</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '9')}>9</Btn>
                </div>
                <div className="grid grid-cols-2">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '0')}>0</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '.')}>.</Btn>
                </div>
                <div className="grid grid-cols-1">
                    <Btn onClick={() => { calcular( inputRef, valor, setValor, setHistorico, showAlerta ); }}>Calcular</Btn>
                </div>
                <div className="max-[400px]:grid max-[400px]:grid-cols-1 min-[401px]:grid min-[401px]:grid-cols-2">
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => {setValor(""); inputRef.current.focus();}}>Limpar</Btn>
                    <Btn onClick={() => { salvar( inputRef, valor, setHistorico, showAlerta ); }}>Salvar</Btn>
                    </div>
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => backspace(inputRef, valor, setValor)}>BackSpace</Btn>
                    </div>
                </div>
            </div>
            <div className="w-full border-(--color-ambar) border-3 py-2">
                <h3 className="text-lg font-bold text-center text-(--color-tan)">
                    Histórico
                </h3>
            </div>
            <div className={`tabela ${historico.length === 1 ? "max-h-40" : "max-h-55"} border-2 border-(--color-ambar)`}>
                {historico.map((item, index) => {
                    const {expressao, resultado} = separarConta(item.conta);
                    return (
                        <div key={`${item.conta}-${index}`} className="elemento border-b-2 border-(--color-ambar) flex flex-row w-full">
                            <div className="conta min-w-[60%] flex-1 text-(--color-yellowgreen) border-r-4 border-(--color-ambar) p-3 flex items-center overflow-hidden">
                                <div tabIndex='0' className='resultado focus:outline-1 focus:outline-(--color-tan) px-1 py-1 w-full break-all min-w-0'>
                                    <span role="button" tabIndex={0}
                                      onClick={() => mostrarNoDisplay(inputRef, setValor, expressao)}
                                      onKeyDown={e => ativarComTeclado(e, () => mostrarNoDisplay(inputRef, setValor, expressao))}
                                      className='resultado calculo focus:outline-1 focus:outline-(--color-tan) px-1.5 py-1
                                                    selection:bg-(--color-ambar) selection:text-(--color-dark1)
                                                    hover:underline
                                                    focus:underline'
                                    >
                                        {expressao}
                                    </span>
                                    {resultado !== null && (
                                        <>
                                            <span className="selection:bg-(--color-ambar) selection:text-(--color-dark1)"> = </span>
                                            <span role="button" tabIndex={0}
                                              onClick={() => mostrarNoDisplay(inputRef, setValor, resultado)}
                                              onKeyDown={e => ativarComTeclado(e, () => mostrarNoDisplay(inputRef, setValor, resultado))}
                                              className='resultado calculo focus:outline-1 focus:outline-(--color-tan) px-1.5 py-1
                                                    selection:bg-(--color-ambar) selection:text-(--color-dark1)
                                                    hover:underline
                                                    focus:underline'
                                            >
                                                {resultado}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="lixeira shrink-0 p-3 flex justify-center items-center">
                                <Botao onClick={() => excluir( index, setHistorico, showAlerta )} aria-label={`Excluir ${item.conta} do histórico`} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
