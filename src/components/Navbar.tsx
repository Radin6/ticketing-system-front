import Button from "./Button"
import { useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
import { useStoreUser } from "@/store/useStoreUser";
import userLogout from "@/services/users/userLogout";
import toast from "react-hot-toast";
import { useSidebar } from "@/store/useSidebar";

function Navbar() {
  const { user, setUser } = useStoreUser();
  const navigate = useNavigate();
  const { isLeftsidebarOpen, setIsLeftsidebarOpen } = useSidebar()

  const handleLogout = () => {
    toast.success("Logged out");
    userLogout();
    navigate("/");
    setUser(null);
  }

  const handleOpenSidebar = () => {
    setIsLeftsidebarOpen(!isLeftsidebarOpen);
  };

  return (
    <nav className="fixed flex w-full justify-between items-center p-3">
      <div onClick={handleOpenSidebar} className="shadow-md shadow-gray-400 border-2 px-2 border-black rounded-full bg-yellow-500 hover:bg-yellow-600 h-[50px]">
        <FaListCheck className="h-full text-3xl cursor-pointer" />
      </div>
      <div>
        {user ?
          <div className="flex items-center">
            <p className="px-4">{user.email}</p>
            <Button
              variant="clearRed"
              onClick={handleLogout} >
              Logout
            </Button>
          </div>
          : <Button variant="clearGreen" onClick={() => { navigate("/login") }} >
            Log in
          </Button>
        }

      </div>
    </nav>
  )
}

export default Navbar;