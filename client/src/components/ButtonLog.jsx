import '../styles/ButtonLog.css'

export default ({type , text , Click , icon}) => {
    return(
        <>
        <button type={type}  onClick={Click} className='buttLog' > {icon} {text} </button>
        </>
    )
}