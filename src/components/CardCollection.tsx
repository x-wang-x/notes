import '../styles/Card.css'
import Card from './Card'


function CardCollection() {
  interface myData {
    id : number,
    title : string | undefined,
    content : string | undefined
  }
  
  const getItem : myData[] = JSON.parse(localStorage.getItem("data")!)

  return (
    <div className='card-collection'>
      {
        getItem.map((e)=> {
          return (
            <Card title={e.title} content={e.content}/>
          )
        })
      }
    </div>
  )
}

export default CardCollection