import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Button() {
  function downloadCv() {
    const cvUrl = "../../public/Dipankar_Chowdhury.pdf"
    const a = document.createElement('a')
    a.href = cvUrl
    a.download = "Dipankar_Chowdhury_CV.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <button
      onClick={downloadCv}
      className="mt-5 bg-sky-500 text-[#222222] p-3 rounded-full font-bold flex items-center gap-2"
    >
      Download CV{" "}
      <AiOutlineArrowRight className="text-[20px] bg-[#222222] w-[30px] h-[30px] p-[3px] rounded-full" />
    </button>
  );
}

export default Button;
