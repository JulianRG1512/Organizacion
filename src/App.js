import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header'; //importar el archivo que contiene nuestro componente Header
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer"


function App() {
  
  const [mostrarFormulario,actualizarMostrar] = useState (false); // aca se utiliza el hooks useState, este se declara como una constante entre los corchetes lleva el nombre de la constante
  //la función que va a cambiar el estado el useState y entre paréntesis el estado inicial

  //Al colocar este arreglo permite que siempre al iniciar la aplicación se muestre de primeras estos datos y no este en
  const [colaboradores, actualizarColaboradores] = useState ([
    {
      id:uuidv4 (),
      equipo: "FrontEnd",
      foto: "https://github.com/harlandlohora.png",
      nombre:"Harlan Lohora",
      puesto: "Instructor",
      fav: true
  },{
    id: uuidv4(),
    equipo: "Backend",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Backend",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }

]);


  const [equipos, actualizarEquipos] = useState ([
    { 
      id:uuidv4 (),
      titulo: "Backend",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id:uuidv4 (),
      titulo: "FrontEnd",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id:uuidv4 (),
      titulo: "DataScience",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id:uuidv4 (),
      titulo: "Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id:uuidv4 (),
      titulo: "Ux y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id:uuidv4 (),
      titulo: "Movil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id:uuidv4 (),
      titulo: "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
 ])

  //Esta es la función que cambiaría es estado negandolo
  const cambiarEstado = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar Colaborador

  const registrarColaborador = (colaborador) =>{
      console.log("Nuevo Colaborador", colaborador);
      
      //Spread operator, crea una copia de los valores actuales y luego le agregamos el nuevo valor
      actualizarColaboradores([...colaboradores, colaborador]);
}

  //Eliminar Colaborador 
  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
        actualizarColaboradores(nuevosColaboradores);
}

//Actualizar color de equipo

const actualizarColor = (color, id) =>{
  console.log("Actualizar: ", color, id);

  const equiposActualizados = equipos.map((equipo) =>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
  })
    actualizarEquipos(equiposActualizados)
}

//Crear equipo

const crearEquipo = (nuevoEquipo) =>{
  console.log(nuevoEquipo);
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
}

const like = (id) => {
  console.log("like", id);
  const colaboradoresActualizados =  colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav 
      }
      return colaborador
  })
    actualizarColaboradores (colaboradoresActualizados)
}

  // Declaramos un arreglo que a su vez llevara objetos que contendrán el titulo, y colores, esto para asignar un titulo y colores diferentes a cada componente y no tener que hacerlo uno por uno, este arreglo lo utilizaremos en el método .map
  
  
// Dentro del div llamamos a nuestro componente asi: <Header />, esto aplica para todos los componentes
// Utilizamos en operador ternario para crear la condición asi:{mostrarFormulario ? <Formulario />: <></>}
    //utilizamos el operador ternario en vez de utilizar un if, y asi comprobamos lo declarado en el useState y poder cambiar el estado
// Utilizamos props en el llamado de este componente <MiOrg>
// Para poder recorrer el arreglo que declaramos arriba "equipos" se utiliza .map que nos crea otro arreglo a a partir de uno ya creado
   // al utilizar .map es obligatorio asignar una key, que es un valor único e irrepetible, este arreglo va a ser nuestra props para utilizarlas em el componente Equipo, para utilizarlo se hace asi: 
   /*nombre del arreglo.map ( (nombre del arreglo , index o posición ) => {
      return <en este caso el componente Equipo le asignamos una props o propiedad llamada datos y esta recibe el objeto equipo , debe llevar una key única que en este caso es el titulo> </en>})*/

  return (
    <div>
          <Header />
            {/*mostrarFormulario && <Formulario/>*/}
          {
            mostrarFormulario ? <Formulario equipos ={equipos.map( (equipo) => {
            return equipo.titulo})}
                registrarColaborador = {registrarColaborador} 
                crearEquipo ={crearEquipo}
                />:<></>
            }
          
          <MiOrg cambiarEstado = {cambiarEstado}/>
          
          {
            equipos.map((equipo)=>{
              return <Equipo 
              datos = {equipo}
              key = {equipo.titulo} 
              colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
              eliminar = {eliminarColaborador}
              actualizarColor = {actualizarColor}
              like = {like}
              
              /> })
              
          
          }

          <Footer />

    </div>
  );
}

export default App;
