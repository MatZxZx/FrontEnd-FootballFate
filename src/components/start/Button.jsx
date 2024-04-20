import './button.css'



function Button({ text, clas }){
    return(
    <button className= {clas}>{text}</button>
    )
}

export default Button