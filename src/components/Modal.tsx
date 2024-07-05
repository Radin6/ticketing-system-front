import Button from "./Button"
import React, { ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  children: ReactNode;
  onClose?: (action: any) => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="flex justify-center items-center absolute backdrop-blur-sm w-screen h-screen top-0 left-0">
      <div className="min-w-[300px] min-h-[200px] bg-slate-300 rounded-md p-5 bg-">
        <Button onClick={onClose} className="p-[0px] rounded-full bg-red-400">
          <IoMdCloseCircle className="text-3xl"/>
        </Button>
        {children}
      </div>
    </div>
  )
}

export default Modal;