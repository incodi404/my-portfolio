import React from "react";
import { BsLinkedin, BsTwitterX, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="flex items-center justify-between px-10">
        <a href="/" className="text-[20px] font-bold text-[#21c1ff]">
          Dipankar Chowdhury
        </a>
        <section className="flex gap-5">
          <a href="https://www.linkedin.com/in/dipankar-chowdhury/"><BsLinkedin className="text-[20px]" /></a>
          <a href="https://x.com/JS_Guy302"><BsTwitterX className="text-[20px]" /></a>
          <a href="mailto:chowdhurydipankar1106@gmail.com"><MdEmail className="text-[20px]" /></a>
        </section>
      </div>
      <div className="w-full h-[1px] bg-slate-600 mt-5 mb-5"></div>
      <div className="text-center mb-5">
        <p className="text-slate-600 text-[14px]">Designed, Developed and Deployed by <a href="https://www.linkedin.com/in/dipankar-chowdhury/" className="text-white hover:underline">Dipankar Chowdhury</a></p>
        <span class="block text-sm text-slate-600 sm:text-center mt-3 text-[14px]">
          © 2024{" "}
          <a href="https://www.linkedin.com/in/dipankar-chowdhury/" class="hover:underline">
            Dipankar Chowdhury
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
