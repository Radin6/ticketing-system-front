interface IButton {
  children?: JSX.Element | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({children, onClick, className} : IButton) {
  return (
    <button 
      className={`p-3 bg-blue-500 rounded-md text-gray-200 hover:bg-slate-400 max-w-fit ${className}`}
      onClick={onClick}
      >
      {children}
    </button>
  )
}

export default Button;