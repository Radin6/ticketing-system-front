import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface IHomeLayout {
  children: ReactNode;
}

const HomeLayout: React.FC<IHomeLayout> = ({ children }) => {
  return (
    <main className="w-full h-full bg-beige">
      <Navbar />
      <div className="max-w-[1200px] min-h-screen mx-auto">
        {children}
      </div>
    </main>
  )
}

export default HomeLayout;