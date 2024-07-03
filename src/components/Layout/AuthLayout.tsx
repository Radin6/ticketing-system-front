import React, { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({children}) => {
  return (
    <main className="w-full h-full bg-beige">
      <div className="max-w-[1200px] min-h-screen mx-auto">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout;