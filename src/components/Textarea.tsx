import { useState } from "react"
import "../styles/Textarea.css"
interface TAprops {
    handleKeyArea : React.KeyboardEventHandler
    handleChangeArea : React.ChangeEventHandler
    handleChangeTitle : React.ChangeEventHandler
    title : string | undefined
    content : string | undefined
}

function Textarea(props : TAprops) {
  return (
    <>
        <input className="title" onChange={e => props.handleChangeTitle(e)} type="text" placeholder="Title" value={props.title}/>
        <textarea
          spellCheck = "false"
          className="text"
          onChange={e => props.handleChangeArea(e)}
          onKeyDown={e => props.handleKeyArea(e)}
        >
          {props.content}
        </textarea>
    </>

  )
}

export default Textarea