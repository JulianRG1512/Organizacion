import "../MiOrg/MiOrg.css"

const MiOrg = (props) =>{
    //Los estados hacen uso de las hooks, para este ejemplo vamos a utilizar un hooks que se llama useState
    // La forma de utilizar useState es: const [nombre variable, funcionqueactualiza] = useState(valorInicial)
    // también se debe hacer uso de los eventos, para este caso onClick y se debe poner al elemento que necesitemos, (imagen, botón, ect), en este caso
    // hacemos uso de la funcion cambiarEstado declarada en el archivo App.js y esta se utiliza mediante props

    return  <section className="orgSection">
                <h3 className="title">Mi Organización</h3>
                <img src="/img/add.png" alt ="add" onClick={props.cambiarEstado}/>
            </section>
}

export default MiOrg;

