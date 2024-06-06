import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <nav className="w-full text-[15px] flex justify-between space-x-5 mb-10 px-5 py-5 uppercase items-center fixed bg-black">
        <a href="/" className="text-[20px] font-bold text-[#21c1ff]">
          Dipankar Chowdhury
        </a>
        <div className="space-x-5 hidden lg:flex">
          <a href="/">Home</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achivements">Achivements</a>
          <a href="#contact">Contact Me</a>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex lg:hidden"
        >
          <RxHamburgerMenu className="text-[30px]" />
        </button>
      </nav>
      {isOpen && (
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#00000041] fixed w-full h-full"
        >
          <div className="fixed top-[0rem] flex flex-col w-[70%] right-0 h-full items-start px-5 py-10 space-y-2 bg-[#21c1ff] text-black">
            <h2 className="text-[30px] text-black font-bold">
              Dipankar Chowdhury
            </h2>
            <div className="w-full h-[1px] bg-slate-600 mb-"></div>
            <a href="/">Home</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achivements">Achivements</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
