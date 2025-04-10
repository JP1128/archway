const TextButton = (props) => {
    return (
      <button 
        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[15px] py-[7px] rounded-[10px] border border-[#fa5053]"
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        
        {props.children}
      </button>
    );
};
  
export default TextButton;