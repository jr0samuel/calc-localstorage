import { useEffect, useRef, useState } from "react";
import "./calc.css";
import { handleHead } from "../../utils/handleHead.js";
import { Btn } from "../../components/Btns.jsx";
import { evaluate } from "mathjs";
export default function Calc(){
    useEffect(() => {
        handleHead('/calc-icon-vetor-illustration.png', 'Calculadora');
    }, []);
    const keyLS = '@calc-historico/contas-salvas';
    const [historico, setHistorico] = useState(() => {
        try {
            const savedHistorico = localStorage.getItem(keyLS);
            const parsedHistorico = savedHistorico ? JSON.parse(savedHistorico) : [];
            return Array.isArray(parsedHistorico) ? parsedHistorico : [];
        } catch (error) {
            console.error("Erro ao carregar o histórico", error);
            return [];
        }
    });
    useEffect(() => {
        localStorage.setItem(keyLS, JSON.stringify(historico));
    }, [historico]);
    const inputRef = useRef(null);
    const getInputValue = () => inputRef.current?.value ?? "";
    const setInputValue = value => { if (inputRef.current) inputRef.current.value = value; };
    const calcular = () => {
        let el = inputRef.current;
        if (!el) return;
        let inputValueGet = getInputValue().trim();
        if (!inputValueGet) {
            alert('Digite uma expressão para calcular');
            el.focus();
            return;
        }
        try {
            let resultado = evaluate(inputValueGet);
            setInputValue(`${inputValueGet} = ${resultado}`);
            setHistorico(prev => [ { conta: `${inputValueGet} = ${resultado}` }, ...prev ] );
            alert('Conta salva');
            el.focus();
        } catch (error) {
            console.error(error);
            alert('Conta inválida');
            el.focus();
        }
    };
    const salvar = () => {
        let el = inputRef.current;
        if (!el) return;
        let inputValueGet = getInputValue().trim();
        if (!inputValueGet) {
            alert('Nada para salvar. Digite uma expressão para calcular.');
            el.focus();
            return;
        }
        setHistorico(prev => [ { conta: inputValueGet }, ...prev ] );
        alert('Salvo');
        el.focus();
    };
    function insertAtCursor (text) {
        let el = inputRef.current;
        if (!el) return;
        let inputValue = el.value;
        let startPos = el.selectionStart ?? 0;
        let endPos = el.selectionEnd ?? 0;
        let newValue = inputValue.substring(0, startPos) + text + inputValue.substring(endPos);
        el.value = newValue;
        let pos = startPos + text.length;
        el.selectionStart = pos;
        el.selectionEnd = pos;
        el.focus();
    };
    function comeco () {
        let el = inputRef.current;
        if (!el) return;
        el.selectionStart = 0;
        el.selectionEnd = 0;
        el.focus();
    };
    function fim () {
        let el = inputRef.current;
        if (!el) return;
        let len = el.value.length;
        el.selectionStart = len;
        el.selectionEnd = len;
        el.focus();
    };
    function setaEsq () {
        let el = inputRef.current;
        if (!el) return;
        if (el.selectionStart > 0) {
            el.selectionStart--;
            el.selectionEnd = el.selectionStart;
        }
        el.focus();
    };
    function setaDir () {
        let el = inputRef.current;
        if (!el) return;
        if ((el.selectionEnd ?? 0) < el.value.length) {
            el.selectionStart = (el.selectionEnd ?? 0) + 1;
            el.selectionEnd = el.selectionStart;
        }
        el.focus();
    };
    const backspace = () => {
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
    const excluir = (index, evento) => {
        setHistorico(prev => prev.filter((_, i) => i !== index));
        evento.currentTarget.blur();
        alert('Excluído');
    };
    return (
        <section>
            <h1>Calculadora</h1>
            <div>
                <input ref={inputRef} id="calcInput" name="inputCalc" inputMode="none" placeholder="Digite a expressão matemática"
                  className="tab w-full h-10 text-center text-(--color-grey1) border-2 border-(--color-grey1)" />
            </div>
            <div>
                <a className="tab" href="/dicas" target="_blank" rel="noopener noreferrer">
                    <Btn>Dicas</Btn>
                </a>
            </div>
            <div id="btns">
                <div className="max-[400px]:grid max-[400px]:grid-cols-1 min-[401px]:grid min-[401px]:grid-cols-3">
                    <div>
                    <Btn onClick={() => comeco()}>Começo</Btn>
                    </div>
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => setaEsq()}>⟵</Btn>
                    <Btn onClick={() => setaDir()}>⟶</Btn>
                    </div>
                    <div>
                    <Btn onClick={() => fim()}>Fim</Btn>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <Btn onClick={() => insertAtCursor(' ')}>Espaço</Btn>
                </div>
                <div className="grid grid-cols-5">
                    <Btn onClick={() => insertAtCursor(' + ')}>+</Btn>
                    <Btn onClick={() => insertAtCursor(' - ')}>−</Btn>
                    <Btn onClick={() => insertAtCursor(' * ')}>×</Btn>
                    <Btn onClick={() => insertAtCursor(' / ')}>÷</Btn>
                    <Btn onClick={() => insertAtCursor('^')}>^</Btn>
                </div>
                <div className="grid grid-cols-6">
                    <Btn onClick={() => insertAtCursor('(')}>(</Btn>
                    <Btn onClick={() => insertAtCursor(')')}>)</Btn>
                    <Btn onClick={() => insertAtCursor('[')}>[</Btn>
                    <Btn onClick={() => insertAtCursor(']')}>]</Btn>
                    <Btn onClick={() => insertAtCursor('{')}>{"\u007B"}</Btn>
                    <Btn onClick={() => insertAtCursor('}')}>{"\u007D"}</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor('1')}>1</Btn>
                    <Btn onClick={() => insertAtCursor('2')}>2</Btn>
                    <Btn onClick={() => insertAtCursor('3')}>3</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor('4')}>4</Btn>
                    <Btn onClick={() => insertAtCursor('5')}>5</Btn>
                    <Btn onClick={() => insertAtCursor('6')}>6</Btn>
                </div>
                <div className="grid grid-cols-3">
                    <Btn onClick={() => insertAtCursor('7')}>7</Btn>
                    <Btn onClick={() => insertAtCursor('8')}>8</Btn>
                    <Btn onClick={() => insertAtCursor('9')}>9</Btn>
                </div>
                <div className="grid grid-cols-2">
                    <Btn onClick={() => insertAtCursor('0')}>0</Btn>
                    <Btn onClick={() => insertAtCursor('.')}>.</Btn>
                </div>
                <div className="grid grid-cols-1">
                    <Btn onClick={() => calcular()}>Calcular</Btn>
                </div>
                <div className="max-[400px]:grid max-[400px]:grid-cols-1 min-[401px]:grid min-[401px]:grid-cols-2">
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => {inputRef.current.value=''; inputRef.current.focus();}}>Limpar</Btn>
                    <Btn onClick={() => salvar()}>Salvar</Btn>
                    </div>
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => backspace()}>BackSpace</Btn>
                    </div>
                </div>
            </div>
            <div className="w-full border-(--color-ambar) border-3 py-2">
                <h3 className="text-lg font-bold text-center text-(--color-tan)">
                    Histórico
                </h3>
            </div>
            <div className={`tabela ${historico.length === 1 ? "max-h-13" : "max-h-32"} border-2 border-(--color-ambar)`}>
                {historico.map((item, index) => (
                    <div key={`${item.conta}-${index}`} className="elemento border-b-2 border-(--color-ambar) flex flex-row">
                        <div className="conta w-4/5 text-(--color-yellowgreen) border-r-4 border-(--color-ambar) p-3 break-all">
                            <div onClick={() => { inputRef.current.value = item.resultado !== null && item.resultado !== undefined
                            ? `${item.conta} = ${item.resultado}` : item.conta } }
                            tabIndex='0' className='resultado focus:outline-1 focus:outline-(--color-tan) px-1.5' >
                                {item.resultado !== null && item.resultado !== undefined
                                  ? `${item.conta} = ${item.resultado}`
                                  : item.conta}
                            </div>
                        </div>
                        <div className="lixeira w-1/5 text-center p-3 flex justify-center items-center align-middle">
                            <button onClick={(evento) => excluir(index, evento)} aria-label={`Excluir ${item.conta} do histórico`}
                              className="lixo border-(--color-ambar) p-3 bg-(--color-grey1) hover:bg-(--color-red) duration-400 ease-in-out focus:bg-(--color-red) outline-0 w-12.5 h-12.5 rounded-[50%] flex justify-center items-center">
                                <svg className='text-(--color-dark1)' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
