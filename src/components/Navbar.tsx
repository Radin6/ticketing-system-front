import Button from "./Button"
import { useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full justify-between p-2 bg-slate-300">
      <div className="border-2 px-2 border-black rounded-full bg-blue-300">
        <FaListCheck className="h-full text-3xl" />
      </div>
      <div>
        <Button onClick={() => { navigate("/login") }} >
          Log in
        </Button>
      </div>
    </nav>
  )
}

export default Navbar;