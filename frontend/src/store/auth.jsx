
import {createContext, useContext, useState} from "react";

// creating  context
export const AuthContext = createContext();

//provider
export const AuthProvider = ({children}) =>{

    const [token,setToken] = useState(localStorage.getItem('token'));

    const storeToken = (serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    const Logout = () =>{
        setToken(null);
        return localStorage.removeItem('token');
    }
    return <AuthContext.Provider value={{storeToken , Logout,token}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth is not wrapped in main.jsx")

    }
    return authContextValue;
}