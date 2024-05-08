import Home from "./Pages/Home"
import Markets from "./Pages/Markets";
import Akinyele from "./Pages/Akinyele";
import Aleshinloye from "./Pages/Aleshinloye";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/markets" element={<Markets />} />
      <Route path="/akinyele" element={<Akinyele />} />
      <Route path="/aleshinloye" element={<Aleshinloye />} />
      <Route path="*" element={<div>Page Not Found!</div> } />
    </Routes>
  </BrowserRouter>
  )
}

export default App
