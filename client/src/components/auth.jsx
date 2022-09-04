import "../styles/auth.css";

const Auth = ({ type, placeholder, name, value, disabled, text, icon, onWrite , errorMessage}) => {
  return (
    <>
      <div className="input_r">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onWrite}
            className="Input"
           
          />
         
          {icon}
        
         {/*  <span>{errorMessage}</span> */}
        
      </div>
    </>
  );
};
export default Auth;