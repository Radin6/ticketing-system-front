import { useSidebar } from "@/store/useSidebar";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "@/hooks/useClickOutside";
import { useStoreUser } from "@/store/useStoreUser";
import { IoMdHome } from "react-icons/io";
import { GrDomain } from "react-icons/gr";
import { FaListCheck } from "react-icons/fa6";
import toast from "react-hot-toast";

export function LeftSidebar() {
  const { isLeftsidebarOpen, setIsLeftsidebarOpen } = useSidebar()
  const { user } = useStoreUser()
  const navigate = useNavigate()
  const modalRef = useOutsideClick(() => {
    setIsLeftsidebarOpen(false)
  });

  const elementStyle = "flex gap-1 items-center pl-3 my-1 text-xl rounded-md hover:bg-amber-300 cursor-pointer"

  const handleCLickElement = (path: string, requireAuth: boolean) => {
    if ((requireAuth && user) || !requireAuth) {
      setIsLeftsidebarOpen(false);
      return navigate(path)
    }

    toast.error("This path require authorization")
  }


  return (
    <div ref={modalRef as React.RefObject<HTMLDivElement>} className={`fixed w-[200px] h-screen bg-amber-200 ease-in-out duration-300 z-20 ${isLeftsidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-center text-xl font-bold">Ticketing System</h1>
        <div className="border-2 px-2 mt-2 border-black rounded-full bg-yellow-500 h-[50px] w-[50px]">
          <FaListCheck className="h-full text-3xl" />
        </div>
      </div>
      <ul className="my-10 mx-5">
        <li className={elementStyle} onClick={() => handleCLickElement("/", false)}><GrDomain />Landing</li>
        <li className={elementStyle} onClick={() => handleCLickElement("/home", true)}><IoMdHome />Home</li>
      </ul>
    </div>
  )
}

export default LeftSidebar;