import React from "react";
import main_img from "../public/main.jpg";
import Button from "./components/Button";
import { DiCss3, DiHtml5, DiReact, DiNodejsSmall, DiMongodb, DiRedis, DiMysql } from "react-icons/di";

function App() {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="w-[90vw] flex flex-col justify-center items-center space-y-10">
        <nav className="w-[25rem] text-[15px] text-center space-x-5 mt-5 p-2 uppercase bg-gray-800 rounded-full">
          <a href="">Home</a>
          <a href="">Education</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
        </nav>
        <div className="w-full bg-[#222222] rounded-2xl items-center space-y-10 sm:space-y-0 p-10 flex flex-col sm:flex-row justify-around">
          <section className="w-[50vh] sm:w-[80vh] text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
            <h1 className="text-[5vh]">
              Hi, I am{" "}
              <span className="font-bold text-[#21c1ff]">
                Dipankar Chowdhury
              </span>
            </h1>
            <p className="mt-4 text-[18px] text-gray-400">
              A well skilled{" "}
              <span className="font-bold">Full Stack Developer</span> who built
              scalable, secure, user-friendly web applications to make people's
              life more easier and smooth.
            </p>
            <Button />
          </section>
          <img src={main_img} className="w-[20rem] rounded-full" alt="" />
        </div>
        <h2 className="text-[3rem]">My Services</h2>
        <div className="w-full flex justify-around flex-col sm:flex-row items-center gap-10">
          <section className="w-[20rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
            <div className="flex gap-5 justify-start text-[30px]">
              <DiReact className="text-sky-500 font-bold" />
              <DiHtml5 className="text-sky-500" />
              <DiCss3 />
            </div>
            <h3 className="text-[25px] font-semibold">Frontend</h3>
            <ul className="opacity-60 space-y-1">
              <li className="border-b-[1px] py-2">
                Beautiful, user-friendly UI
              </li>
              <li className="border-b-[1px] py-2">
                Interactive, optimized frontend
              </li>
              <li>Well-managed design</li>
            </ul>
          </section>
          <section className="w-[20rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
            <div className="flex gap-5 justify-start text-[30px]">
              <DiNodejsSmall />
              <DiMongodb />
              <DiRedis />
              <DiMysql />
            </div>
            <h3 className="text-[25px] font-semibold">Backend</h3>
            <ul className="opacity-60 space-y-1">
              <li className="border-b-[1px] py-2">
                Beautiful, user-friendly UI
              </li>
              <li className="border-b-[1px] py-2">
                Interactive, optimized frontend
              </li>
              <li>Well-managed design</li>
            </ul>
          </section>
          <section className="w-[20rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
            <div className="flex gap-5 justify-start text-[30px]">
              <DiReact className="text-sky-500 font-bold" />
              <DiHtml5 className="text-sky-500" />
              <DiCss3 />
            </div>
            <h3 className="text-[25px] font-semibold">Deployment</h3>
            <ul className="opacity-60 space-y-1">
              <li className="border-b-[1px] py-2">
                Beautiful, user-friendly UI
              </li>
              <li className="border-b-[1px] py-2">
                Interactive, optimized frontend
              </li>
              <li>Well-managed design</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
