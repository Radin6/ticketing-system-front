import Button from "./Button"
import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  setShowModal: (show: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, setShowModal }) => {
  return (
    <div className="flex justify-center items-center absolute backdrop-blur-sm w-screen h-screen top-0 left-0">
      <div className="min-w-[200px] min-h-[200px] bg-slate-200 rounded-md p-2">
        <Button onClick={() => setShowModal(false)}>
          X
        </Button>
        {children}
      </div>
    </div>
  )
}

export default Modal;