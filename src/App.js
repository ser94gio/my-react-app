import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./nav";
import Home from "./main"; 
import About from "./about";
import Exp from "./experience";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-react-app" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Exp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
