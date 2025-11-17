import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";

//practicum1 pages import
import Practicum1 from "./pages/practicum/Practicum1.jsx";
import Practicum2 from "./pages/practicum/Practicum2.jsx";
import Practicum3 from "./pages/practicum/Practicum3.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practicum2" element={<Practicum2 />} />
        <Route path="/practicum3" element={<Practicum3 />} />
      </Routes>
    </Router>
  );
};

export default App;