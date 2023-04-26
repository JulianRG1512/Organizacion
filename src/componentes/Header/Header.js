
import "./Header.css"; // se importa el archivo css

//Se crea el componente Header, el cual lleva una función del mismo nombre, que va a mostrar una imagen en el header de la pagina
//Para agregar una clase de utiliza className a diferencia del class de html
 
function Header() {
    return <header className="header">     
                <img src= "/img/HeaderHeader_total.png" alt ="org"/>
            </header>
}

//Es muy importante realiza la exportación de nuestro componente el cual lo vamos a importar en nuestro archivo App.js
export default Header;