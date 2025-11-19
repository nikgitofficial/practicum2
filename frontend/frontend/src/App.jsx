import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";

//practicum1 pages import
import Practicum1 from "./pages/practicum/Practicum1.jsx";
import Practicum2 from "./pages/practicum/Practicum2.jsx";
import Practicum3 from "./pages/practicum/Practicum3.jsx";
import Practicum4 from "./pages/practicum/Practicum4.jsx";
import Practicum5 from "./pages/practicum/Practicum5.jsx";
import Practicum6 from "./pages/practicum/Practicum6.jsx";
import Practicum7 from "./pages/practicum/Practicum7.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practicum2" element={<Practicum2 />} />
        <Route path="/practicum3" element={<Practicum3 />} />
        <Route path="/practicum4" element={<Practicum4 />} />
        <Route path="/practicum5" element={<Practicum5 />} />
        <Route path="/practicum6" element={<Practicum6 />} />
        <Route path="/practicum7" element={<Practicum7 />} />
      </Routes>
    </Router>
  );
};

export default App;