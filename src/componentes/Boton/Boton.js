import "../Boton/Boton.css"

//POdemos utilizar children como llave en vez de colocar el nombre de la llave en el archivo Formulario.js
const Boton = (props) =>{
    return <button className ="boton">{props.children} </button>


}

export default Boton;