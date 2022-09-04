import '../styles/etapesdemande.css'

const EtapesDemande= ({nomEtap ,description , question}) => {
    return(
        <>
          <div className='ins'>
              <h3>{nomEtap}</h3>
              <p>{description}</p>
              <a href="a">
                <p className='ques-p'>{question}</p>
              </a>
            </div>
          
        
        
        </>
    )
}
export default EtapesDemande;