import React from "react";
import main_img from "/main.jpg";
import rentify_img from "/rentify.png";
import Button from "../components/Button";
import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Landing() {
  return (
    <>
      <div className="w-full h-[50rem] sm:h-[30rem] bg-[#222222] rounded-2xl items-center space-y-10 sm:space-y-0 p-10 flex flex-col md:flex-row justify-around">
        <section className="w-[50vh] sm:w-[80vh] text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
          <h1 className="text-[5vh]">
            Hi, I am{" "}
            <span className="font-bold text-[#21c1ff]">Dipankar Chowdhury</span>
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
      <div className="w-full flex justify-around flex-col xl:flex-row items-center gap-10">
        <section className="w-[20rem] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
          <FaFigma className="text-[30px]" />
          <h3 className="text-[25px] font-semibold">Design</h3>
          <ul className="opacity-60 space-y-1">
            <li className="border-b-[1px] py-2">
              Create layouts that adapt to different screen sizes seamlessly.
            </li>
            <li className="border-b-[1px] py-2">
              Ensure user interfaces are simple, clear, and easy to navigate.
            </li>
            <li className="border-b-[1px] py-2">
              Maintain a cohesive look with consistent colors, fonts, and
              imagery.
            </li>
            <li className="border-b-[1px] py-2">
              Design for inclusivity, ensuring usability for all users,
              including those with disabilities.
            </li>
            <li>
              Use balanced visuals, whitespace, and typography to create an
              attractive design.
            </li>
          </ul>
        </section>
        <section className="w-[20rem] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
          <div className="flex gap-5 justify-start text-[30px]">
            <DiNodejsSmall />
            <DiMongodb />
            <DiHtml5 />
            <DiReact />
            <DiCss3 />
          </div>
          <h3 className="text-[25px] font-semibold">Development</h3>
          <ul className="opacity-60 space-y-1">
            <li className="border-b-[1px] py-2">
              Ensure mobile-friendly and adaptive websites
            </li>
            <li className="border-b-[1px] py-2">
              Optimize images, caching, and minimize CSS/JS for speed.
            </li>
            <li className="border-b-[1px] py-2">
              Use HTTPS, regular updates, and secure coding to protect data.
            </li>
            <li className="border-b-[1px] py-2">
              Utilize meta tags, keywords, and clean URLs for better search
              visibility.
            </li>
            <li>
              Design intuitive menus and accessible content for better
              engagement.
            </li>
          </ul>
        </section>
        <section className="w-[20rem] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
          <div className="flex gap-5 justify-start text-[30px]">
            <FaServer />
            <FaGitAlt />
            <FaAws />
            <IoLogoVercel />
            <FaDocker />
          </div>
          <h3 className="text-[25px] font-semibold">Deployment</h3>
          <ul className="opacity-60 space-y-1">
            <li className="border-b-[1px] py-2">
              Automate testing and integration for smooth code deployment with
              CI/CD.
            </li>
            <li className="border-b-[1px] py-2">
              Use systems like Git to manage code changes and collaboration.
            </li>
            <li className="border-b-[1px] py-2">
              Ensure your deployment can handle increased traffic and load
              efficiently.
            </li>
            <li className="border-b-[1px] py-2">
              Implement monitoring tools to track performance and detect issues.
            </li>
            <li>
              Have a plan for rolling back to previous versions if issues arise.
            </li>
          </ul>
        </section>
      </div>
      <h2 className="text-[3rem]">My Skills</h2>
      <div
        id="skills"
        className="w-full flex justify-around flex-col xl:flex-row items-center gap-10"
      >
        <div className="w-[20rem] sm:w-[30rem] h-[30rem] space-y-5">
          <h3 className="text-[30px]">Frontend</h3>
          <section>
            <section className="flex justify-between mb-2">
              <p>React JS</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Redux</p>
              <p className="opacity-60">70%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[70%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Chart JS</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>HTML5</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>CSS3</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Tailwind CSS</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Shadcn</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
        </div>
        <div className="w-[20rem] sm:w-[30rem] h-[30rem] space-y-5">
          <h3 className="text-[30px]">Backend</h3>
          <section>
            <section className="flex justify-between mb-2">
              <p>Node JS</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Express JS</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Flask</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>MongoDB</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Redis</p>
              <p className="opacity-60">70%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[70%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>SQL</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
        </div>
        <div className="w-[20rem] sm:w-[30rem] h-[30rem] space-y-5">
          <h3 className="text-[30px]">Others</h3>
          <section>
            <section className="flex justify-between mb-2">
              <p>Javascript</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Python</p>
              <p className="opacity-60">70%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[70%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Vercel</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>Docker</p>
              <p className="opacity-60">80%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </section>
          <section>
            <section className="flex justify-between mb-2">
              <p>System Designing</p>
              <p className="opacity-60">90%</p>
            </section>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-sky-600 h-2.5 rounded-full w-[90%]"></div>
            </div>
          </section>
        </div>
      </div>
      <h2 className="text-[3rem]">More Skills</h2>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Linux
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          JWT
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Cloudinary
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Passport.js
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          OAuth 2.0
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Multer
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Bootstrap
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Ionic
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Render
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Web Security
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Burpsuit
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          React Hook Form
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Axios
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Nodemailer
        </section>
      </div>
      <h2 className="text-[3rem]">My Projects</h2>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="flex gap-10 items-center justify-center bg-[#222222] p-10 rounded-2xl flex-col xl:flex-row">
          <img src={rentify_img} className="w-[40rem]" alt="" />
          <div className="text-left w-[30rem] space-y-5">
            <h3 className="text-[30px] font-bold flex justify-between items-center w-[30rem]">
              Rentify <span className="text-[20px] opacity-75">May, 2024</span>
            </h3>
            <p>
              This is a real estate website which helps people to find tenants
              and rent properties online.
            </p>
            <div className="flex flex-wrap gap-3">
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                Node JS
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                Express JS
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                React JS
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                MongoDB
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                Redis
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                Vercel
              </section>
              <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
                Render
              </section>
            </div>
            <div className="flex gap-5">
              <a href="">
                <button className="px-5 py-2 rounded-lg bg-black flex items-center gap-2">
                  Github <FaGithub />
                </button>
              </a>
              <a href="https://rentify-beige.vercel.app/" target="_blank">
                <button className="px-5 py-2 rounded-lg bg-sky-600">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
