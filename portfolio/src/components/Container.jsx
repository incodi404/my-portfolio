import React from "react";

function Container({ children }) {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="w-[90vw] flex flex-col justify-center items-center space-y-10">
        {children}
      </div>
    </div>
  );
}

export default Container;
