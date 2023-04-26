import { useState } from "react";
import "../CampoTexto/CampoTexto.css"

//props son datos que les pasamos a nuestros componentes para que se comporten de alguna forma.
// Estos son objetos que puedan tener las propiedades que nosotros queramos, tienen una llave

const Campo = (props) =>{
    
    //Destructuracion

    const {type = "text"} = props
    

    const manejarCambio = (e) => { // el e.target.value, lo que hace es que captura el valor
    props.actualizarValor (e.target.value); // tomamos la función actualizarValor por props del formulario
    }
      
    return  <div className = {`campo campo-${type}`}>
                <label>{props.titulo}</label>
                <input placeholder = {props.placeholder} required = {props.required} value = {props.valor} onChange={manejarCambio} type={type}/>
                
            </div>

}

export default Campo;