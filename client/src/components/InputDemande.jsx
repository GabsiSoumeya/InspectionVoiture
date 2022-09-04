import '../styles/inputdemande.css'

const InputDemande =  ({ type, placeholder, name, value, disabled, text, icon ,onWrite }) => {
    return(
        <>
        <div>
         <div className="inputdemande">
         <label>
       
        <input
          type={type}
          text= {text}
          onChange={onWrite}
          placeholder={placeholder}
          name={name}
          value={value}
          disabled={disabled}
          className="Input-demande"
        />
         {icon}
        </label>
      
       
        
      
    </div>
        
       </div> 
        </>
    )
}
export default InputDemande;