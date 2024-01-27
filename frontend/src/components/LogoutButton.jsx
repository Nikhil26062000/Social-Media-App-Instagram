import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {

    const {Logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.success("Logout successful")
        Logout();
        navigate("/");

        
    }
  return (
    <>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Signout
      </button>
    </>
  );
};

export default LogoutButton;
