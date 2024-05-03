import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home"
import { NotFound } from "./pages/404";
import { StyleGuide } from "./pages/styleGuide";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/styles" element={<StyleGuide />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
