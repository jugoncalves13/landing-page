import Style from "./texto.module.css";

function Texto( props )
{
    return(
        <section className={Style.texto}>
            <h1>V de Vivara</h1>
            <h3>Coleções icona e vivara</h3>
            <h3>VERSATILIDADE E INFINITAS POSSIBILIDADES</h3>
            {props.children}
            <span className={Style.textovivara}>{props.vivara}</span>
        </section>

    )
}
export default Texto;