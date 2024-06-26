interface IButton {
  children: JSX.Element | string;
  className?: string;
}

function Button({children, className} : IButton) {
  return (
    <button className={`p-3 bg-blue-500 rounded-md text-gray-200 hover:bg-slate-400 ${className}`}>
      {children}
    </button>
  )
}

export default Button;