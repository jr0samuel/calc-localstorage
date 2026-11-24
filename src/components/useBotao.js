import { useRef, useState } from "react";
export function useBotao ( callback ) {
    const [ click, setClick ] = useState(false);
    const ultimoDisparo = useRef(-Infinity);
    const handleDown = e => {
        if (e.type === "keydown") {
            if (e.key !== "Enter" && e.key !== " ") return;
            e.preventDefault();
        };
        setClick(true);
    };
    const handleUp = e => {
        if (!click) return;
        setClick(false);
        if (e.currentTarget) e.currentTarget.blur();
        if (callback) {
            ultimoDisparo.current = performance.now();
            callback();
        };
        if (e.type === "touchend" && e.cancelable) e.preventDefault();
    };
    const handleCancel = e => {
        setClick(false);
        e.target.blur();
    };
    const handleClick = () => {
        setClick(false);
        e.target.blur();
    };
    return {
        click,
        bind: {
            onKeyDown: handleDown,
            onKeyUp: handleUp,
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onTouchStart: handleDown,
            onTouchEnd: handleUp,
            onTouchCancel: handleCancel,
            onBlur: handleCancel,
            onContextMenu: e => e.preventDefault(),
            onClick: handleClick,
        },
    };
};
