
import Style from "./menu.module.css";

function Menu( props )
{
    return(
        <section className={Style.menu}>
            <h2>Coleção VIVARA/ Jóias</h2>
            {props.children}
            <span className={Style.menuvivara2}>{props.vivara2}</span>
        </section>

    )
}
export default Menu;