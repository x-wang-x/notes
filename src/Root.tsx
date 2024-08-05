import './styles/Root.css'
import CardCollection from './components/CardCollection'
import Button from './components/Button'
import Textarea from './components/Textarea'

import { useState,useEffect } from 'react'

function Root() {
  enum states {
    Home,
    AddNew,
    Edit
  }
  const [content,setContent] = useState<string>()
  const [state,setState] = useState(states.Home)

  useEffect(() => {
    console.log(state)
  }, [state]);
  

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
  let contentBox;
  let btn;
  if (state == states.Home) {
    contentBox = <CardCollection/>
    btn = <Button class='save' text="Add More" handleClick={addMore}/>
  }
  else {
      btn = 
      <>
        <Button class="back" text="Back" handleClick={()=>setState(states.Home)}/>
        <Button class="save" text="Save" handleClick={()=>setState(states.Edit)}/>
      </>
      contentBox = <Textarea handleKey={handleKey} handleChange={handleChange} content={content}/>
  }
  return (
    <div className='container'>
      {btn}
      {contentBox}
    </div>
  )
}

export default Root
