import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useClickOutside";
import { useDoSort } from "../store/useDoSort";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ISortOption } from "../constants/tickets";

interface IDropdown {
  children: React.ReactNode;
  options: ISortOption[]
}

function Dropdown({ children, options }: IDropdown) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useOutsideClick(() => {
    setIsOpen(false)
  });

  const { setDoSort } = useDoSort();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const liStyle = "hover:bg-slate-300 p-2"

  return (
    <div>
      <button onClick={handleOpen} className=" flex items-center font-semibold px-2 py-1 border border-gray-300 rounded-lg bg-gray-200 whitespace-nowrap">
        {children}<RiArrowDropDownLine size={30}/>
      </button>
      {isOpen &&
        <ul ref={dropdownRef as React.RefObject<HTMLUListElement>} className="absolute bg-slate-100 border mt-1">
          {options.map((option) =>
            <li key={option.property} className={liStyle} onClick={() =>{ setDoSort(option.property); setIsOpen(false)}}>
              {option.title}
            </li>
          )}
        </ul>
      }

    </div>
  )
}

export default Dropdown;