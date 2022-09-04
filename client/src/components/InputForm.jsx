import "../styles/inputform.css";

const InputForm = ({ type, placeholder, name, value, disabled, text, icon }) => {
  return (
    <>
      <div className="inputform_container">
        <label>
          {text}

          <br />
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
           
            
          />
           {icon} 
        </label>
    
      </div>
    </>
  );
};
export default InputForm;