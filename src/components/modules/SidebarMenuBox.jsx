import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

function SidebarMenuBox({ title, redirect = "#", icon: Icon, subMenus = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className="relative flex flex-col cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`flex items-center gap-x-4 py-2 rounded-xl px-3 ${
          isOpen ? "bg-gray-100" : "bg-transparent"
        }`}
      >
        <Icon size={20} />
        <h3>{title}</h3>
      </div>
      <ul
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-all duration-300 overflow-hidden pl-10 flex flex-col gap-y-2 mt-2`}
      >
        {subMenus.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.href}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-900"
              }
              onClick={() => {
                if (window.innerWidth < 640) {
                  setIsOpen(false);
                }
              }}
            >
              <span>{menu.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <IoIosArrowUp
        className={`transition-all duration-300 absolute right-3 top-2.5 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
        size={20}
      />
    </div>
  );
}

export default SidebarMenuBox;
