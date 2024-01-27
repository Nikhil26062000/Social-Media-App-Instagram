import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
     </BrowserRouter>

    
    </>
  );
  
}
export default App