import React from "react";

const TextButton: React.FC<{
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ type = "button", onClick, children }) => {
  return (
    <button
      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[15px] py-[7px] rounded-[10px] bg-transparent text-black border-none"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
