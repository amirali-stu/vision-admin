import React, { useState } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearchOutline, IoNotifications } from "react-icons/io5";
import AvatarBox from "./AvatarBox";
import Overlay from "./Overlay";

function Header({ isOpen, setIsOpen }) {
  const [isAvatar, setIsAvatar] = useState(false);

  return (
    <header
      className="fixed w-full top-0 left-0 right-0 z-50 border-b-2 border-gray-200
     bg-white sm:px-5 max-sm:px-3 h-[64px] flex items-center justify-between"
    >
      <div className="flex items-center justify-between gap-x-5">
        <img src={logo} alt="logo" className="max-sm:hidden" />

        <CgMenuLeft
          size={25}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className="max-md:hidden relative w-[402px] border-2 border-gray-200 bg-gray-50 text-gray-500 rounded-2xl p-2 flex items-center gap-2">
          <IoSearchOutline className="text-gray-500 size-5" />
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-5 max-sm:gap-x-2">
        <IoNotifications size={25} className="cursor-pointer" />

        <img
          src={avatar}
          alt="avatar"
          className="cursor-pointer w-8 h-8"
          onClick={() => setIsAvatar(!isAvatar)}
        />

        <AvatarBox isShow={isAvatar} setIsShow={setIsAvatar} />
      </div>
    </header>
  );
}

export default Header;
