import './styles/Root.css'
import CardCollection from './components/CardCollection'
import Button from './components/Button'
import Textarea from './components/Textarea'
import { useState,useContext, ReactEventHandler } from 'react'



function Root() {
  enum states {
    Home,
    AddNew,
    Edit
  }
  const [content,setContent] = useState<string>()
  const [title,setTitle] = useState<string>()

  const [state,setState] = useState(states.Home)
  let containerItem
  if(state == states.Home){
    containerItem = 
    <>
    <Button class='add' text="Add More" handleClick={addMore}/>
    <CardCollection/>
    </>
  }
  else {
    containerItem =
    <>
    <Button class="back" text="Back" handleClick={()=>setState(states.Home)}/>
    <Button class="save" text="Save" handleClick={submit}/>
    <Textarea handleChangeTitle={(e : React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} handleKeyArea={handleKey} handleChangeArea={handleChange} content={content} title={title}/>  
    </>
  }
  

  function handleChange(e : React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setContent(e.target.value)
  }
  function handleKey( e : React.KeyboardEvent<HTMLTextAreaElement>){
    const textArea = e.currentTarget;
    //when tab pressed add /t and prevent from changing element selection (default control)
    if (e.key == "Tab"){
      e.preventDefault();

      e.currentTarget.setRangeText(
        "\t",
        textArea.selectionStart,
        textArea.selectionStart,
        "end")
    }
    //Put selection below newline, prevent replaced to blank newline (default)
    if (e.key == "Enter"){
      e.preventDefault();
      e.currentTarget.setRangeText(
        "\n",
        textArea.selectionStart,
        textArea.selectionStart,
        "end")
    }
  }
  function addMore(){
    setContent(undefined);
    setState(states.AddNew)
  }
  function submit(){
    interface myData {
      id : number,
      title : string | undefined,
      content : string | undefined
    }
    let toBeWritten : myData = {
      id : 1,
      title : title,
      content : content
    }
    if(state==states.AddNew){
      var data : Array<myData> = JSON.parse(localStorage.getItem("data")!)
      if (data == null){
        localStorage.setItem("data",JSON.stringify(
          [toBeWritten]
          ))
      }
      else {
        toBeWritten = {
          id : data[data.length-1].id+1,
          title : title,
          content : content
        }
        data.push(toBeWritten)
        localStorage.setItem("data",JSON.stringify(data))
      }
      setState(states.Home)
    }
  }
  return (
    <div className='container'>
      {containerItem}
    </div>
  )
}

export default Root
