import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import RegisterSuccess from "./pages/RegisterSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/successfully-registered" element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
