import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import {useAuth} from "../store/auth"
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const Home = () => {
    const {token} = useAuth();
    const [msg,setMsg] = useState("");
    const [islogin,setIsLogin] = useState(false);
    const navigate = useNavigate();

    const getHomeData = async() =>{
        try {
            const response = await fetch("http://localhost:3000/api/auth/home",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        const data = await response.json();
        console.log(response)
        console.log(data);

        if(response.ok){
            setMsg("Welcome to Home page")
            setIsLogin(true);

        }
        else{
            setMsg(data.message);
            setIsLogin(false);
        }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
       getHomeData();
    },[])
    return (
        <>
          {islogin && <HomePage/>}
          
          {msg=="You are not logged in."?navigate("/"):""}
        </>
    )
}

export default Home;