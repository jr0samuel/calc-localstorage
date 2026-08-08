import { useBotao } from "./useBotao.js";

export const Btn = ( { children, onClick, className } ) => {
    return (
        <button className={`${className}
          w-full h-10 text-center text-(--color-dark1) bg-(--color-grey1) border border-(--color-black2) rounded-md hover:bg-(--color-grey2)`}
          onClick={onClick} tabIndex="-1">
            {children}
        </button>
    );
};

export const Botao = ( { onClick } ) => {
    const { click, bind } = useBotao(onClick);
    return (
        <button onClick={onClick} {...bind} className={`${click ? "click" : "unclick"} lixo border-(--color-ambar) p-3 mx-2 bg-(--color-grey1) hover:bg-(--color-red) duration-400 ease-in-out focus:bg-(--color-red) outline-0 w-12.5 h-12.5 rounded-[50%] flex justify-center items-center`}>
            <svg className='text-(--color-dark1)' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </button>
    );
};
