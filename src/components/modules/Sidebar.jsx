import React from "react";
import { GiPieChart } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { HiMiniShoppingBag, HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaLock, FaClipboardList } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdSupport } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import SidebarMenuBox from "./SidebarMenuBox";

function Sidebar({ isOpen, setIsOpen }) {
  const subMenus = [
    { title: "Products", href: "products" },
    { title: "Orders", href: "Orders" },
    { title: "Customers", href: "Customers" },
    { title: "Reviews", href: "Reviews" },
    { title: "Products", href: "Products" },
  ];

  return (
    <>
      {/* 🔹 Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 transition-all duration-300 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`fixed top-16 bottom-0 bg-white border-r-2 h-screen py-4 border-gray-200 font-medium
          transition-all duration-300 ease-in-out z-50
          ${
            isOpen
              ? "left-0 w-[250px]"
              : "sm:w-[60px] sm:left-0 max-sm:-left-full"
          }
        `}
      >
        {/* حالت سایدبار هم باز و بسته در دوحالت موبایل و دسکتاپ */}
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className="max-h-120 overflow-y-scroll">
            <div className="border-b-2 border-gray-200 px-3">
              <ul className="flex flex-col gap-y-2 *:transform *:hover:translate-x-1 *:relative *:hover:before:absolute *:hover:before:top-5 *:hover:before:-left-5 *:hover:before:rounded-lg *:hover:before:w-4 *:hover:before:h-1 *:hover:before:bg-red-500">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center gap-x-2 py-2 px-3 ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <GiPieChart size={20} />
                    <span>Owerview</span>
                  </NavLink>
                </li>
                <li>
                  <SidebarMenuBox
                    title="Products"
                    icon={IoDocumentText}
                    subMenus={subMenus}
                    redirect={"#"}
                    setIsOpen={setIsOpen}
                  />
                </li>
                <li>
                  <SidebarMenuBox
                    title="Products"
                    icon={HiMiniShoppingBag}
                    subMenus={subMenus}
                    redirect={"#"}
                    setIsOpen={setIsOpen}
                  />
                </li>
                <li>
                  <NavLink
                    to="messages"
                    className={({ isActive }) =>
                      `flex items-center justify-between py-2 px-3 ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <div className="flex items-center gap-x-2">
                      <HiMiniInboxArrowDown size={20} />
                      <span>Messages</span>
                    </div>

                    <div className=" px-2.5 py-1 text-xs rounded-full bg-red-200 text-red-800 text-center">
                      <span>1</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <SidebarMenuBox
                    title="Products"
                    icon={FaLock}
                    subMenus={subMenus}
                    redirect={"#"}
                    setIsOpen={setIsOpen}
                  />
                </li>
              </ul>
            </div>

            <div className="px-3">
              <ul className="flex flex-col gap-y-2 *:transform *:hover:translate-x-1 *:relative *:hover:before:absolute *:hover:before:top-5 *:hover:before:-left-5 *:hover:before:rounded-lg *:hover:before:w-4 *:hover:before:h-1 *:hover:before:bg-red-500">
                <li>
                  <NavLink
                    to="docs"
                    className={({ isActive }) =>
                      `flex items-center gap-x-2 py-2 px-3 ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <FaClipboardList size={20} />
                    <span>Docs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="components"
                    className={({ isActive }) =>
                      `flex items-center gap-x-2 py-2 px-3 ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <BsFillCollectionFill size={20} />
                    <span>Components</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="help"
                    className={({ isActive }) =>
                      `flex items-center gap-x-2 py-2 px-3 ${
                        isActive ? "text-blue-600" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 640) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <MdSupport size={20} />
                    <span>Help</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* static links */}
          <div className="absolute top-160 left-0 w-full">
            <ul className="flex items-center justify-center gap-x-2">
              <li className="cursor-pointer">
                <NavLink
                  to="setting"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : "text-gray-900"}`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <HiOutlineAdjustmentsVertical size={22} />
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="global"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : "text-gray-900"}`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <RiGlobalLine size={22} />
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="settings"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-600" : "text-gray-900"}`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <IoSettingsOutline size={22} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/*  حالت بسته سایدبار در اندازه دسکتاپ  نمایش آیکون ها*/}
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <GiPieChart size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="a"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <IoDocumentText size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="b"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <HiMiniShoppingBag size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="c"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <HiMiniInboxArrowDown size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="d"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <FaLock size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="e"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <FaClipboardList size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="f"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <BsFillCollectionFill size={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="g"
                className={({ isActive }) =>
                  `flex items-center justify-center py-2 px-3 ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 640) {
                    setIsOpen(false);
                  }
                }}
              >
                <MdSupport size={30} />
              </NavLink>
            </li>
            <div className="absolute top-130">
              <li>
                <NavLink
                  to="h"
                  className={({ isActive }) =>
                    `flex items-center justify-center py-2 px-3 ${
                      isActive ? "text-blue-600" : "text-gray-900"
                    }`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <IoSettingsOutline size={25} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="i"
                  className={({ isActive }) =>
                    `flex items-center justify-center py-2 px-3 ${
                      isActive ? "text-blue-600" : "text-gray-900"
                    }`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <RiGlobalLine size={25} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="j"
                  className={({ isActive }) =>
                    `flex items-center justify-center py-2 px-3 ${
                      isActive ? "text-blue-600" : "text-gray-900"
                    }`
                  }
                  onClick={() => {
                    if (window.innerWidth < 640) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <HiOutlineAdjustmentsVertical size={25} />
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
