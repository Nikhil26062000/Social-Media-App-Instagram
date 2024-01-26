import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
      </Routes>
     </BrowserRouter>

    
    </>
  );
  
}
export default App