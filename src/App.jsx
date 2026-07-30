import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calc from "./pages/Calc/Calc.jsx";
import Dicas from "./pages/Dicas/Dicas.jsx";
export default function App ( ) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Calc />} />
                <Route path="/dicas" element={<Dicas />} />
            </Routes>
        </BrowserRouter>
    );
};
