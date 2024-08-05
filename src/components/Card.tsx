interface myCard {
  title : string | undefined,
  content : string | undefined,
  date? : Date
}

function Card(props : myCard) {
  return (
    <div className='card'>
        <h1 className='title'>{props.title}</h1>
        <p className='content'>{props.content}</p>
        <p className='update'>{new Date().toLocaleString()}</p>
    </div>
  )
}

export default Card