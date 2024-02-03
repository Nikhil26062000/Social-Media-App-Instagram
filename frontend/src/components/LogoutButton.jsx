import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({text}) => {

    // const {Logout} = useAuth();
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     toast.success("Logout successful")
    //     Logout();
    //     navigate("/");

        
    // }
  return (
    <>
      <button
       
        className="bg-[#363636] text-white text-md font-medium py-1 px-2 rounded"
      >
        {text}
      </button>
    </>
  );
};

export default LogoutButton;
