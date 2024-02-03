import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
     </BrowserRouter>

    
    </>
  );
  
}
export default App