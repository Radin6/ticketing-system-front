import Button from "./Button"
import React, { ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useOutsideClick } from "@/hooks/useClickOutside";

interface ModalProps {
  children: ReactNode;
  onClose?: (action: any) => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {

  const modalRef = useOutsideClick(() => {
    if (onClose) {
      onClose(false);
    }
  });

  return (
    <div className="flex justify-center items-center absolute backdrop-blur-sm w-screen h-screen top-0 left-0">
      <div ref={modalRef as React.MutableRefObject<any>} className="min-w-[300px] max-w-[90%] min-h-[200px] max-h-[90%] bg-slate-50 rounded-md p-5 shadow-lg">
        <Button onClick={onClose} className="p-[0px] rounded-full bg-red-400">
          <IoMdCloseCircle className="text-3xl"/>
        </Button>
        {children}
      </div>
    </div>
  )
}

export default Modal;