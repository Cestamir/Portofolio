
interface CardProps {
  photoURL: string,
  headline: string,
  text: string,
  status: string  
}

const Card = ({photoURL, headline, text, status} : CardProps) => {
  return (
    <div className='card'>
        <h1 className='full-width'>{headline}</h1>
        <p className='big-item'>{text}</p>
        <div style={{backgroundImage: `url(${photoURL})`}} className='small-top'></div>
        <p className='small-bottom'>{status}</p>
    </div>
  )
}

export default Card