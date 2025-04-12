import React from "react";

const OutlinedButton: React.FC<{
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ type = "button", onClick, children }) => {
  return (
    <button
      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[15px] py-[7px] rounded-[10px] border border-[#fa5053]"
      type={type}
      onClick={onClick}
    >
      <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-[#fa5053]">{children}</p>
    </button>
  );
};

export default OutlinedButton;
