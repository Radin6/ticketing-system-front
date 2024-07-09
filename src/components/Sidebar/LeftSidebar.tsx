import { useSidebar } from "../../store/useSidebar";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useClickOutside";
import { useStoreUser } from "../../store/useStoreUser";
import toast from "react-hot-toast";

export function LeftSidebar() {
  const { isLeftsidebarOpen, setIsLeftsidebarOpen } = useSidebar()
  const { user } = useStoreUser()
  const navigate = useNavigate()
  const modalRef = useOutsideClick(() => {
    setIsLeftsidebarOpen(false)
  });

  const elementStyle = "pl-3 my-1 text-xl rounded-md hover:bg-amber-300 cursor-pointer"
  
  const handleCLickElement = (path: string, requireAuth: boolean) => {
    if ((requireAuth && user) || !requireAuth) {
      setIsLeftsidebarOpen(false);
      return navigate(path)
    }
    
    toast.error("This path require authorization")
  }


  return (
    <div ref={modalRef} className={`fixed w-[200px] h-screen bg-amber-200 ease-in-out duration-300 ${isLeftsidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <ul className="my-24 mx-5">
      <li className={elementStyle} onClick={() => handleCLickElement("/", false)}>Landing</li>
        <li className={elementStyle} onClick={() => handleCLickElement("/home", true)}>Home</li>
      </ul>
    </div>
  )
}

export default LeftSidebar;