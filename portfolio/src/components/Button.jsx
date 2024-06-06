import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Button({file="CV"}) {
  function downloadCv() {
    let url
    let fileName
    if(file === "CV") {
      url = "../../public/Dipankar_Chowdhury.pdf"
      fileName = "Dipankar_Chowdhury_CV.pdf"
    }
    if(file === "Research Paper") {
      url = "../../public/IRJET-V11I2120.pdf"
      fileName = "IRJET-V11I2120.pdf"
    }
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <button
      onClick={downloadCv}
      className="mt-5 bg-sky-500 text-[#222222] p-3 rounded-full font-bold flex items-center gap-2"
    >
      Download {file}{" "}
      <AiOutlineArrowRight className="text-[20px] bg-[#222222] w-[30px] h-[30px] p-[3px] rounded-full" />
    </button>
  );
}

export default Button;
