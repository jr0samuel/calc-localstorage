export const Btn = ( { children, onClick, className } ) => {
    return (
        <button className={`${className}
          w-full h-10 text-center text-(--color-dark1) bg-(--color-grey1) border border-(--color-black2) rounded-md hover:bg-(--color-grey2)`}
          onClick={onClick} tabIndex="-1">
            {children}
        </button>
    );
};
