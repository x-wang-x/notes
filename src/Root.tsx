import './styles/Root.css'
import Card from './components/Card'

function Root() {
  return (
    <div className='container'>
      <button className='btn'>Add More</button>
      <textarea className='txt'></textarea>
      <Card/>
      <Card/>
      <Card/>
      {/* <table className='table'>
        <thead>
          <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
            </tr>
            <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
            </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default Root
