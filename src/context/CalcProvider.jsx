import { useState } from "react";
import { CalcContext } from "./CalcContext.jsx";

export function CalcProvider({children}) {
    const [valor, setValor] = useState("");
    return <CalcContext.Provider value={{valor, setValor}}>{children}</CalcContext.Provider>
};
