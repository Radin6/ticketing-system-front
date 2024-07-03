interface IButton {
  children?: JSX.Element | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  variant?: "blue" | "clear" | "red";
  disabled?: boolean;
}

function Button({children, onClick, className, type, variant="blue", disabled=false} : IButton) {
  const variants = {
    blue: 'shadow-md shadow-gray-400 p-3 bg-blue-500 rounded-md text-gray-200 font-semibold hover:bg-slate-400 max-w-fit',
    clear: 'shadow-md shadow-gray-400 p-3 rounded-md font-semibold hover:bg-slate-300 max-w-fit bg-transparent text-light-green border-[3px] border-light-green',
    red: 'shadow-md shadow-gray-400 p-3 bg-red-500 rounded-md text-gray-200 font-semibold hover:bg-slate-500 max-w-fit'
  }
  return (
    <button 
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      >
      {children}
    </button>
  )
}

export default Button;