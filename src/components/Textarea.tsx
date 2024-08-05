import { useState } from "react"
import "../styles/Textarea.css"
interface TAprops {
    handleKey : React.KeyboardEventHandler
    handleChange : React.ChangeEventHandler
    content : string | undefined
}

function Textarea(props : TAprops) {
  return (
    <textarea
      spellCheck = "false"
      className="text"
      onChange={e => props.handleChange(e)}
      onKeyDown={e => props.handleKey(e)}
    >
      {props.content}
    </textarea>
  )
}

export default Textarea