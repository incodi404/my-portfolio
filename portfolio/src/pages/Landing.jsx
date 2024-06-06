import React from "react";
import main_img from "/main.jpg";
import rentify_img from "/rentify.png";
import colfession_img from "/Colfessions.png";
import dashboard_img from "/dashboard.png";
import certificate_img from "/certificate.jpg";
import trophy_img from "/achivements.png";
import dipankar_img from "/dipankar.jpg";
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
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { MdCall } from "react-icons/md";

function Landing() {
  return (
    <>
      <div className="w-full h-[50rem] sm:h-[30rem] bg-[#222222] rounded-2xl mt-[6rem] items-center space-y-10 sm:space-y-0 p-10 flex flex-col md:flex-row justify-around">
        <section className="w-[80vw] text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
          <h1 className="text-[5vh]">
            Hi, I am{" "}
            <span className="font-bold text-[#21c1ff]">Dipankar Chowdhury</span>
          </h1>
          <p className="mt-4 text-[18px] text-gray-400">
            A well skilled{" "}
            <span className="font-bold">Full Stack Developer</span> who build
            scalable, secure, user-friendly web applications to make people's
            life more easier and smooth.
          </p>
          <Button />
        </section>
        <img src={main_img} className="w-[20rem] rounded-full" alt="" />
      </div>

      <h2 className="text-[3rem]">My Services</h2>
      <div
        id="services"
        className="w-full flex justify-around flex-col xl:flex-row items-center gap-10"
      >
        <section className="w-[80vw] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
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
        <section className="w-[80vw] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
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
        <section className="w-[80vw] sm:w-[35rem] h-auto sm:h-[34rem] p-10 text-left bg-[#222222] space-y-7 rounded-xl">
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
        <div className="w-[80vw] sm:w-[30rem] h-[30rem] space-y-5">
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
        <div className="w-[80vw] sm:w-[30rem] h-[30rem] space-y-5">
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
        <div className="w-[80vw] sm:w-[30rem] h-[30rem] space-y-5">
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
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Problem Solving
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Continuous Learning
        </section>
        <section className="bg-[#222222] px-4 py-2 cursor-pointer hover:bg-sky-600">
          Analytical Thinking
        </section>
      </div>

      <h2 className="text-[3rem]">My Projects</h2>
      <div
        id="projects"
        className="w-full flex flex-col justify-center items-center gap-10"
      >
        <div className="flex gap-10 md:w-[30rem] items-center justify-center bg-[#222222] p-10 rounded-2xl flex-col xl:flex-row">
          <img src={rentify_img} className="w-[40rem]" alt="" />
          <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
            <h3 className="text-[30px] font-bold flex justify-between items-center w-[80vw] flex-wrap md:w-[30rem]">
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
            <div className="flex gap-5 flex-wrap">
              <a
                href="https://github.com/incodi404/rentify-frontend"
                target="_blank"
              >
                <button className="px-5 py-2 rounded-lg bg-black flex items-center gap-2">
                  Github <FaGithub />
                </button>
              </a>
              <a href="https://rentify-beige.vercel.app/" target="_blank">
                <button className="px-5 py-2 rounded-lg bg-sky-600">
                  Go To Website
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center bg-[#222222] p-10 rounded-2xl flex-col xl:flex-row">
          <img src={colfession_img} className="w-[20rem] rounded-full" alt="" />
          <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
            <h3 className="text-[30px] font-bold flex flex-wrap justify-between items-center w-[80vw] md:w-[30rem]">
              Colfessions{" "}
              <span className="text-[20px] opacity-75">Ongoing</span>
            </h3>
            <p>
              An anonymous confession based social media application for
              students to share their unsaid words.
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
                OAuth 2.0
              </section>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/incodi404/colfessions"
                target="_blank"
              >
                <button className="px-5 py-2 rounded-lg bg-black flex items-center gap-2">
                  Github <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center bg-[#222222] p-10 rounded-2xl flex-col xl:flex-row">
          <img src={dashboard_img} className="w-[40rem]" alt="" />
          <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
            <h3 className="text-[30px] font-bold flex justify-between items-center flex-wrap w-[80vw] md:w-[30rem]">
              Dashboard{" "}
              <span className="text-[20px] opacity-75">March, 2024</span>
            </h3>
            <p>
              A dynamic dashboard built with the MERN Stack and Chart.js,
              featuring interactive Line, and Pie charts. Easily visualize and
              manage data with a user-friendly interface and responsive design.
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
                Chart.js
              </section>
            </div>
            <div className="flex gap-5">
              <a href="https://github.com/incodi404/dashboard" target="_blank">
                <button className="px-5 py-2 rounded-lg bg-black flex items-center gap-2">
                  Github <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[3rem] text-center">My Education</h2>
      <div id="education">
        <section
          id="experience"
          className="w-[80vw] sm:w-[35rem] h-auto p-10 text-left bg-[#222222] space-y-7 rounded-xl"
        >
          <BiSolidInstitution className="text-[30px]" />
          <div>
            <h3 className="text-[25px] font-semibold">
              Bachelor's in Computer Science
            </h3>
            <p className="flex justify-between mt-3">
              <div className="text-gray-400">
                from{" "}
                <a href="https://www.groveus.com/" className="text-white">
                  Siliguri College
                </a>
              </div>
              <span className="opacity-60 italic">2021-2024</span>
            </p>
          </div>
          <ul className="space-y-1">
            <li className="border-b-[1px] py-2 text-gray-400">
              Last semester GPA was <span className="text-[#21c1ff]">8.2</span>
            </li>
            <li className="border-b-[1px] py-2 text-gray-400">
              Mastered in all topics of computer science.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Data Structure and Algorithm
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Networking
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Software Engineering
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              DBMS
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Data Science
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Artificial Intelligence
            </section>
            <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
              Operating Systems
            </section>
          </div>
        </section>
      </div>

      <h2 className="text-[3rem] text-center">Internship</h2>
      <section
        id="experience"
        className="w-[80vw] sm:w-[35rem] h-auto p-10 text-left bg-[#222222] space-y-7 rounded-xl"
      >
        <div>
          <h3 className="text-[25px] font-semibold">
            Frontend Developer Intern
          </h3>
          <p className="text-gray-400">
            at{" "}
            <a href="https://www.groveus.com/" className="text-white">
              Groveus Informatics Pvt Ltd.
            </a>
          </p>
        </div>
        <ul className="space-y-1">
          <li className="border-b-[1px] py-2 text-gray-400">
            Developed frontend of a{" "}
            <span className="text-[#21c1ff]">Trading App</span>
          </li>
          <li className="border-b-[1px] py-2 text-gray-400">
            Built more than 3 websites
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
            React JS
          </section>
          <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
            Ionic
          </section>
          <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
            HTML
          </section>
          <section className="bg-[#414141] px-4 py-2 cursor-pointer hover:bg-sky-600">
            CSS
          </section>
        </div>
      </section>

      <h2 className="text-[3rem] text-center">My Achivements</h2>
      <div
        id="achivements"
        className="w-full flex flex-col justify-center items-center gap-10"
      >
        <div className="flex gap-10 items-center justify-center p-10 rounded-2xl flex-col xl:flex-row">
          <img src={certificate_img} className="w-[40rem]" alt="" />
          <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
            <h3 className="text-[30px] font-bold flex flex-wrap justify-between items-center w-[80vw] md:w-[30rem]">
              Independent Research Paper{" "}
              <span className="text-[20px] opacity-75">March, 2024</span>
            </h3>
            <p>
              My independent research paper on{" "}
              <span className="text-[#21c1ff]">
                IoT and Automation based Smart Urban Agriculter
              </span>{" "}
              was published in{" "}
              <a href="https://www.irjet.net/" className="font-bold">
                International Research Journal of Engineering and Technology
              </a>{" "}
              in 2nd March, 2024.
            </p>
            <div className="flex gap-5">
              <Button file="Research Paper" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center p-10 rounded-2xl flex-col xl:flex-row">
          <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
            <h3 className="text-[30px] font-bold flex flex-wrap justify-between items-center w-[80vw] md:w-[30rem]">
              Secured 2nd Position Among 40 Colleges{" "}
              <span className="text-[20px] opacity-75">April, 2024</span>
            </h3>
            <p>
              I secured 2nd position in NITO organized Science Model Exihibiton
              among 40 colleges by building{" "}
              <span className="text-[#21c1ff]">
                IoT and Automation based Smart Hydroponics
              </span>
              .
            </p>
          </div>
          <img src={trophy_img} className="w-[30rem]" alt="" />
        </div>
      </div>

      <h2 className="text-[3rem] text-center">Contact Me</h2>
      <div
        id="contact"
        className="flex gap-10 items-center justify-center p-10 rounded-2xl flex-col xl:flex-row"
      >
        <img src={dipankar_img} className="w-[30rem] rounded-full" alt="" />
        <div className="text-left w-[80vw] space-y-5 md:w-[30rem]">
          <h3 className="text-[30px] font-bold flex justify-between items-center w-[80vw] md:w-[30rem]">
            Hi, this is Dipankar.
          </h3>
          <p>
            I am a <span className="text-[#21c1ff]">full stack developer</span>,
            I am open for on-site and remote jobs. Also, I do freelancing. If
            you need a value for money web application for your company to grow
            your business, please feel free to contact me.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:chowdhurydipankar1106@gmail.com">
              <button className="px-5 py-2 rounded-lg bg-[#0E2954] flex items-center gap-2">
                Email <TfiEmail />
              </button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank">
              <button className="px-5 py-2 rounded-lg bg-[#0E2954] flex items-center gap-2">
                WhatsApp <ImWhatsapp />
              </button>
            </a>
            <a
              href="https://www.instagram.com/direct/t/incodi404"
              target="_blank"
            >
              <button className="px-5 py-2 rounded-lg bg-[#0E2954] flex items-center gap-2">
                Instagram <FaInstagram />
              </button>
            </a>
            <a href="tel:+917478524191">
              <button className="px-5 py-2 rounded-lg bg-[#0E2954] flex items-center gap-2">
                Call Me <MdCall />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
