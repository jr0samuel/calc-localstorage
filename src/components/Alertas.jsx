import { useCallback, useEffect, useRef, useState } from "react";
const TEMPO_VISIVEL_MS = 5000;
const FADE_MS = 300;
const Alerta = ( { type, message, onClose } ) => {
    const types = {
        success: 'bg-(--color-chartreuse) text-(--color-dark1) border border-(--color-chartreuse) rounded-md p-3 my-2',
        error: 'bg-(--color-red) text-(--color-dark1) border border-(--color-red) rounded-md p-3 my-2',
        warning: 'bg-(--color-cadetblue) text-(--color-dark1) border border-(--color-cadetblue) rounded-md p-3 my-2',
        info: 'bg-(--color-ambar) text-(--color-dark1) border border-(--color-ambar) rounded-md p-3 my-2',
    };
    const [ visivel, setVisivel ] = useState(false);
    const alertaRef = useRef(null);
    const onCloseRef = useRef(onClose);
    const timerFadeOutRef = useRef(null);
    const temOnClose = Boolean(onClose);
    useEffect(() => { onCloseRef.current = onClose; }, [onClose]);
    useEffect(() => {
        void alertaRef.current?.offsetHeight;
        setVisivel(true);
    }, []);
    const fechar = useCallback(() => {
        setVisivel(false);
        clearTimeout(timerFadeOutRef.current);
        timerFadeOutRef.current = setTimeout(() => onCloseRef.current?.(), FADE_MS);
    }, []);
    useEffect(() => {
        // if (!onClose) return;
        if (!temOnClose) return;
        // const timer = setTimeout(() => {
        //     onClose();
        // }, 5000);
        const timer = setTimeout(fechar, TEMPO_VISIVEL_MS);
        return () => clearTimeout(timer);
    // }, [message, onClose]);
    }, [message, temOnClose, fechar]);
    useEffect(() => clearTimeout(timerFadeOutRef.current), []);
    return (
        <div ref={alertaRef} style={{ transitionDuration: `${FADE_MS}ms` }}
          className={`${visivel ? "opacity-100" : "opacity-0 pointer-events-none"}
          fixed top-0 left-1/2 z-50 -translate-x-1/2 transition-opacity ease-in-out motion-reduce:transition-none`}>
            <div className={`${types[type]} shadow-md flex items-center justify-between selection:bg-(--color-dark2) selection:text-(--color-white1)`}>
                <span className="cursor-default pr-2">{message}</span>
                {onClose && (
                    // onClick={onClose}
                    <button onClick={fechar} className="font-bold cursor-pointer focus:outline-2 focus:outline-(--color-blue) px-2">
                        X
                    </button>
                )}
            </div>
        </div>
    );
};
export default Alerta;
