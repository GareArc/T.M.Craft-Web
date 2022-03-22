import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../views/homePage";

export const WebRouters = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </HashRouter>
    )
}