import React from "react";

function Header() {
  return (
    <nav className="w-[25rem] text-[15px] text-center space-x-5 mt-5 p-2 uppercase bg-gray-800 rounded-full">
      <a href="">Home</a>
      <a href="">Education</a>
      <a href="#skills">Skills</a>
      <a href="">Projects</a>
    </nav>
  );
}

export default Header;
