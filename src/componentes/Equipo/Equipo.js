import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";


const Equipo = (props) =>{

    /* Desestructuración del arreglo, en una constante se ponen las llaves del que esta dentro del arreglo y se le asigna el props y el nombre del arreglo
     de esta forma evitamos estar poniendo props.datos.colorSecundario por ejemplo.*/

    
    const {colorPrimario,colorSecundario,titulo, id} = props.datos; // Desestructuración
    const {colaboradores, eliminar, actualizarColor, like} = props;
    
    const estiloTitulo = {borderColor: colorPrimario}; // Se puede crear constantes para estos datos y asi en el estilo solo poner el nombre de la constante.
    const colorFondo = {backgroundColor: hexToRgba (colorPrimario,0.6)}
    
    return ( colaboradores.length > 0 && 
    
        <section className ="equipo" style={colorFondo} >

            <input 
                className="input_color"
                type="color"
                value={colorPrimario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id);
                }}
            
            />
                
                <h3 style = {estiloTitulo}> {titulo} </h3>
                
                    <div className = "colaboradores"> 
                        {
                            colaboradores.map ( (colaborador, index) => <Colaborador 
                            datos = {colaborador} 
                            key = {index} 
                            colorPrimario ={colorPrimario}
                            eliminarColaborador = {eliminar}
                            like = {like}
                            />)
                        }
                    </div>
            </section>

    )
        
}



export default Equipo;
