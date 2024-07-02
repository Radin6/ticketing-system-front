import Button from "./Button"
import { useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
import { useStoreUser } from "../store/useStoreUser";
import userLogout from "../services/users/userLogout";

function Navbar() {
  const { user, setUser } = useStoreUser();
  const navigate = useNavigate();

  return (
    <nav className="flex w-full justify-between p-2 bg-slate-300">
      <div className="shadow-md shadow-gray-400 border-2 px-2 border-black rounded-full bg-blue-300">
        <FaListCheck onClick={() => { navigate("/") }} className="h-full text-3xl cursor-pointer" />
      </div>
      <div>
        {user ?
          <div className="flex items-center">
            <p className="px-4">{user.email}</p>
            <Button
              className="bg-red-500"
              onClick={() => {
                userLogout();
                navigate("/");
                setUser(null);
              }} >
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