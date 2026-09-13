import "./calc.css";
import { useEffect, useState, useRef, useContext } from "react";
import { handleHead, keyLS } from "../../utils/handleHead.js";
import { Btn, Botao } from "../../components/Btns.jsx";
import { insertAtCursor, comeco, fim, setaEsq, setaDir, backspace } from "../../functions/cursorInput.js";
import { calcular, salvar, excluir } from "../../functions/calc.js";
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
    const showAlerta = ( type, message ) => setAlerta( { type, message } );
    const valorRef = useRef(valor);
    useEffect(() => { valorRef.current = valor; }, [valor]);
    useEffect(() => {
        const handleKeyDown = e => {
            const foco = document.activeElement === inputRef.current || document.activeElement === document.body;
            if (!foco || e.key !== "Enter") return;
            e.preventDefault();
            if (e.ctrlKey || e.metaKey) salvar( inputRef, valor, setHistorico, showAlerta );
            else calcular( inputRef, valor, setValor, setHistorico, showAlerta );
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setValor, setHistorico, showAlerta]);
    return (
        <section>
            <h1>Calculadora</h1>
            {alerta && (
                <Alerta
                    type={alerta.type}
                    message={alerta.message}
                    onClose={() => setAlerta(null)}
                />
            )}
            <div>
                <input ref={inputRef} value={valor} onChange={e => setValor(e.target.value)}
                  id="calcInput" name="inputCalc" inputMode="none" placeholder="Digite a expressão matemática"
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
                    <Btn onClick={() => comeco(inputRef)}>Começo</Btn>
                    </div>
                    <div className="flex flex-row justify-between">
                    <Btn onClick={() => setaEsq(inputRef)}>⟵</Btn>
                    <Btn onClick={() => setaDir(inputRef)}>⟶</Btn>
                    </div>
                    <div>
                    <Btn onClick={() => fim(inputRef)}>Fim</Btn>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' ')}>Espaço</Btn>
                </div>
                <div className="grid grid-cols-5">
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' + ')}>+</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' - ')}>−</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' * ')}>×</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, ' / ')}>÷</Btn>
                    <Btn onClick={() => insertAtCursor(inputRef, valor, setValor, '^')}>^</Btn>
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
            <div className={`tabela ${historico.length === 1 ? "max-h-13" : "max-h-32"} border-2 border-(--color-ambar)`}>
                {historico.map((item, index) => (
                    <div key={`${item.conta}-${index}`} className="elemento border-b-2 border-(--color-ambar) flex flex-row w-full">
                        <div className="conta min-w-[60%] flex-1 text-(--color-yellowgreen) border-r-4 border-(--color-ambar) p-3 flex items-center overflow-hidden">
                            <div tabIndex='0' className='resultado focus:outline-1 focus:outline-(--color-tan) px-1.5 w-full break-all min-w-0'>
                                <span onClick={() => { const texto = item.resultado !== null && item.resultado !== undefined
                                    ? `${item.conta} = ${item.resultado}` : item.conta;
                                    setValor(texto);
                                  } }
                                  tabIndex='0' className='resultado calculo focus:outline-1 focus:outline-(--color-tan) px-1'
                                >
                                    {item.resultado !== null && item.resultado !== undefined
                                      ? `${item.conta} = ${item.resultado}`
                                      : item.conta}
                                </span>
                            </div>
                        </div>
                        <div className="lixeira shrink-0 p-3 flex justify-center items-center">
                            <Botao onClick={() => excluir( index, setHistorico, showAlerta )} aria-label={`Excluir ${item.conta} do histórico`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
