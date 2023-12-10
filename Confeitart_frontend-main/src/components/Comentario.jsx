import React from "react";
import "../components/Comentario.css"
const Comentario = props =>{
    
    return(
    <div className="Comentario">
        <h5>{props.nome}</h5>
        <h5>{props.curso}</h5>
        <br />
    <div>-{props.children}</div>
     
     <h6>{props.data.toString()}</h6>
    </div>
    )
}
export default Comentario