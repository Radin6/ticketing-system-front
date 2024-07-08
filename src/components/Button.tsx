interface IButton {
  children?: JSX.Element | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  variant?: "blue" | "clearGreen" | "clearRed" | "red" | "green";
  disabled?: boolean;
}

function Button({children, onClick, className, type, variant="blue", disabled=false} : IButton) {
  const variants = {
    blue: 'shadow-md shadow-gray-400 p-3 bg-blue-500 rounded-md text-gray-200 font-semibold hover:bg-blue-600 max-w-fit',
    green: 'shadow-md shadow-gray-400 p-3 bg-green-700 rounded-md text-green-100 font-semibold hover:bg-green-900 max-w-fit',
    clearGreen: 'shadow-md shadow-gray-400 p-3 rounded-md font-semibold hover:bg-green-300 max-w-fit bg-transparent text-light-green border-[3px] border-light-green',
    clearRed: 'shadow-md shadow-gray-400 p-3 rounded-md font-semibold hover:bg-red-300 max-w-fit bg-transparent text-red-600 border-[3px] border-red-600',
    clearBeige: 'shadow-md shadow-gray-400 p-3 rounded-md font-semibold hover:bg-amber-300 max-w-fit bg-transparent text-black border-[3px] border-beige',
    red: 'shadow-md shadow-gray-400 p-3 bg-red-500 rounded-md text-gray-200 font-semibold hover:bg-red-600 max-w-fit'
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