import "../styles/InputInscr.css";

const InputInscr= ({ type, placeholder, name, value, disabled, text, icon, onWrite
}) => {
  return (
    
    <>
    <div>
      <div className="input_ins">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onWrite}
            className="Input_INS"
           
          />
          {icon}
        
      </div>
      </div>
    </>
  );
};
export default InputInscr;