import Button from "./Button"
import { useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
import { useStoreUser } from "../store/useStoreUser";
import userLogout from "../services/users/userLogout";
import toast from "react-hot-toast";

function Navbar() {
  const { user, setUser } = useStoreUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out");
    userLogout();
    navigate("/");
    setUser(null);
  }

  return (
    <nav className="fixed max-w-[1200px] flex w-full justify-between p-3 bg-light-green">
      <div className="shadow-md shadow-gray-400 border-2 px-2 border-black rounded-full bg-yellow-500 hover:bg-slate-300">
        <FaListCheck onClick={() => { navigate("/") }} className="h-full text-3xl cursor-pointer" />
      </div>
      <div>
        {user ?
          <div className="flex items-center">
            <p className="px-4">{user.email}</p>
            <Button
              variant="red"
              onClick={handleLogout} >
              Logout
            </Button>
          </div>
          : <Button onClick={() => { navigate("/login") }} >
            Log in
          </Button>
        }

      </div>
    </nav>
  )
}

export default Navbar;