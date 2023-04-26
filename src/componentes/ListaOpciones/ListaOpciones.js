import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    /*Método para recorrer un arreglo, Método map -> 
    nombre del arreglo.map ( (nombre del arreglo , index o posición ) => {
        return < debe llevar una key única que en este caso es el index>
    })
    *****Este método, toma un arreglo lo recorre y nos regresa algo nuevo
    */
   
    

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo (e.target.value);
    }

/*  {equipos.map( (equipos, index) =><option key={index}>{equipos}</option>)}, este es la misma función pero en una sola linea  */
 // la primera <option> hace referencia a la primera opción que aparezca en la lista y value, disable defaultValue, hidden son propiedades y se debe agregar al select el value   
    return <div className = "lista-opciones" >
                <label>Equipos</label>

                <select value={props.valor} onChange={manejarCambio} >

                        <option value ="" disabled defaultValue= " " hidden=" " >Seleccionar Equipo</option>

                        {props.equipos.map( (equipos, index) =>{
                            return <option key={index} value={equipos}> {equipos} </option>
                        })}
                </select>
           </div>
}

export default ListaOpciones;