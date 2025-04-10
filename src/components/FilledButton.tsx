const FilledButton = (props) => {
    return (
      <button 
        className="flex flex-col justify-start items-start relative overflow-hidden gap-2.5 px-[15px] py-[7px] rounded-[10px] bg-[#fa5053]"
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-left text-white">
            {props.children}
        </p>
      </button>
    );
};
  
export default FilledButton;