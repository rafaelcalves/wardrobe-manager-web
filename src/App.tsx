import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home, About, SignUp, PiecePage } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/piece" element={<PiecePage />} />
            </Routes>
        </Router>
    );
}

export default App;