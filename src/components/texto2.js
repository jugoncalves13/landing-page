import Style from "./texto2.module.css";

function Texto2( props )
{
    return(
        <>
        <section className={Style.texto2}>
            <h2></h2>
            {props.children}
            <span className={Style.texto2vivara}>{props.vivara}</span>
        </section>
        <section className={Style.texto2}>
            <div>
                <h3>ENTRE EM CONTATO CONOSCO!</h3>
            </div>
            <div>
                <p>E-mail:vdevivara@gmail.com</p>
            </div>
            <div>
                <p>WhatsApp:(11) 99999-9999</p>
            </div>
        </section>
        <section className={Style.texto2}>
            <div>
                <h3>VIVARA</h3>
            </div>
            <div>
                <p>Copyright © 2023, todos os direitos reservados.</p>
            </div>
        </section>
        <section className={Style.texto2}>
            <div>
            <h3>Cadastre-se aqui!</h3>
            </div>

        </section>
        </>


    )
}
export default Texto2;