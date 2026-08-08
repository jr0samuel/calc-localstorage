import { useEffect } from "react";
const Alerta = ( { type, message, onClose } ) => {
    const types = {
        success: 'bg-(--color-chartreuse) text-(--color-dark1) border border-(--color-chartreuse) rounded-md p-3 my-2',
        error: 'bg-(--color-red) text-(--color-dark1) border border-(--color-red) rounded-md p-3 my-2',
        warning: 'bg-(--color-cadetblue) text-(--color-dark1) border border-(--color-cadetblue) rounded-md p-3 my-2'
    };
    useEffect(() => {
        if (!onClose) return;
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [message, onClose]);
    return (
        <div className={`${types[type]} shadow-md flex items-center justify-between`}>
            <span className="cursor-default">{message}</span>
            {onClose && (
                <button onClick={onClose} className="font-bold cursor-pointer focus:outline-2 focus:outline-(--color-blue) px-2">
                    X
                </button>
            )}
        </div>
    );
};
export default Alerta;
