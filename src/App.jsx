import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from "./pages/Calc/Calc.jsx";
import Dicas from "./pages/Dicas/Dicas.jsx";
import { CalcProvider } from "./context/CalcProvider.jsx";
export default function App ( ) {
    return (
        <BrowserRouter>
            <CalcProvider>
                <Routes>
                    <Route path="/" element={<Calc />} />
                    <Route path="/dicas" element={<Dicas />} />
                </Routes>
            </CalcProvider>
        </BrowserRouter>
    );
};
