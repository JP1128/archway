import React from 'react';

const FilledButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button
      className="flex flex-col justify-start items-start relative overflow-hidden gap-2.5 px-[15px] py-[7px] rounded-[10px] bg-[#fa5053]"
    >
      {label}
    </button>
  );
};

export default FilledButton;