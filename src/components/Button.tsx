interface IButton {
  children?: JSX.Element | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({children, onClick, className} : IButton) {
  return (
    <button 
      className={`shadow-md shadow-gray-400 p-3 bg-blue-500 rounded-md text-gray-200 font-semibold hover:bg-slate-400 max-w-fit ${className}`}
      onClick={onClick}
      >
      {children}
    </button>
  )
}

export default Button;