import './components/global.module.css';
import Menu from "./components/menu";
import Inicial from "./components/inicial";
import img from "./components/pag inicial.png";
import Texto from "./components/texto";
import Foto from "./components/foto"
import img2 from "./components/foto.png";
import Texto2 from "./components/texto2"


function App() {
     
 return(
    <>
    <Menu menu="VIVARA"/>
    <Inicial inicial={img} />
    <Texto texto="Coleções icona e vivara"/>
    <Foto foto={img2} />
    <Texto2 texto2="vivara"/>
    </>
 )
}

export default App;
