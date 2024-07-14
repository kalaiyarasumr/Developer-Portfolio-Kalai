import React from "react";

const SecondaryBtn = ({ children, className, onClick }) => {
  return (
    <button className={`${className} btn text-white flex items-center gap-2 border-2 border-white bg-transparent  hover:bg-aqua   duration-500`} onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryBtn;
