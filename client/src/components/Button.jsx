import '../styles/button.css'

const Button= ({type , text , Click , disabled}) => {
    return(
        <>
        
        <button type={type}  onClick={Click} disabled={disabled} >{text} 
          </button>
         
        </>
    
    )
}
export default Button;