import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Games from "./components/Games";
import Ranking from "./components/Ranking";
import Players from "./components/Players";
import App from "./App";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="games" element={<Games />} />
                    <Route path="ranking" element={<Ranking />} />
                    <Route path="players" element={<Players />} />
                    <Route path="*" element={<h1>Not Found 404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
