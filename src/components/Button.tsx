import '../styles/Button.css'
interface btnProps {
    class : string;
    text :string;
    handleClick : React.MouseEventHandler
}
function Button(props : btnProps) {
  return (
    <>
    <button className={'btn '+props.class} onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

export default Button