import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton"

// Para la creación de este componente se utilizó una función flecha, ya que también se puede
//En este ejemplo titulo y placeholder son las llaves de las props que pasamos en el componente CampoTexto

// el método .preventDefault(), permite quitar el comportamiento por defecto de los formularios de recargar la pagina, en este caso 
// va ligado al evento onSubmit ={nombre de la función}

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState(" "); // creación de estados
    const [puesto,actualizarPuesto] = useState(" ");
    const [foto,actualizarFoto] = useState(" ");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState ("");
    const [color, actualizarColor] = useState ("");
    

    const {registrarColaborador, crearEquipo} = props; // desestructuración



    const manejarEnvio = (e) =>{
            e.preventDefault() // permite modificar el comportamiento del formulario para prevenir que se este recargando la pg

            // De esta forma podemos construir un objeto a partir del botón enviar, esto para enviar a un backend
            // si el valor y la llave del objeto tienen el mismo nombre se puede utilizar uno solo, ej: nombre, puesto, foto
            let datosaEnviar = {
                nombre:nombre,
                puesto:puesto,
                foto:foto,
                equipo:equipo
            }
            registrarColaborador (datosaEnviar);
            //console.log(datosaEnviar); //En vez del console.log se podría utilizar algún método de fetch para enviar a un servidor
        }


        const manejarNuevoEquipo = (e) => {
                e.preventDefault()
               crearEquipo({titulo, colorPrimario: color});
        }
    
        // En los campos de texto agregamos los estados para ser utilizados con props en el componente CampoTexto
    return <section className ="formulario">
        <form onSubmit={manejarEnvio}>  
            <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo = "Nombre" placeholder ="Escriba su nombre" required valor ={nombre} actualizarValor={actualizarNombre}/>
                <CampoTexto titulo = "Puesto" placeholder ="Escriba su puesto" required  valor = {puesto} actualizarValor = {actualizarPuesto}/>
                <CampoTexto titulo = "Foto" placeholder ="Ingresar enlace de foto" required valor = {foto} actualizarValor = {actualizarFoto}/>
                <ListaOpciones 
                valor = {equipo} 
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}/> 
                <Boton>Crear</Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>  
            <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto titulo = "Titulo"
                            placeholder ="Ingrese titulo"
                            required 
                            valor ={titulo}
                            actualizarValor={actualizarTitulo}
                />
                <CampoTexto titulo = "Color" 
                            placeholder ="Ingresar el color en Hex"
                            required  
                            valor = {color} 
                            actualizarValor = {actualizarColor}
                            type = "color"/>
                <Boton>Registrar equipo</Boton>
        </form>
    </section>

}


export default Formulario;