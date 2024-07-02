interface IInput {
  type: string; 
  onChange?: (e: any) => void; 
  value: string; 
  id?: string;
  required?: boolean;
  className?: string;
}

function Input({type, onChange, value, id, required=false, className}: IInput): React.ReactElement {
  return (
    <input
      className={`border px-2 py-1 rounded-md bg-slate-100 ${className}`}
      type={type}
      onChange={onChange}
      value={value}
      id={id}
      required={required}
      />
  )
}

export default Input;