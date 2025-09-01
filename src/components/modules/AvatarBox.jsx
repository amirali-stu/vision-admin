import React from "react";

function AvatarBox({ isShow, setIsShow }) {
  return (
    <>
      {/* 🔹 Backdrop */}
      {isShow && (
        <div
          className="fixed inset-0 bg-black/40 transition-all duration-300 z-[9999]"
          onClick={() => setIsShow(false)}
        />
      )}

      <div
        className={`absolute transition-all duration-300 ${
          isShow ? "opacity-100 top-10" : "opacity-0 top-5"
        } right-8 rounded-xl w-40 h-50 bg-white border-2 border-gray-200`}
      ></div>
    </>
  );
}

export default AvatarBox;
