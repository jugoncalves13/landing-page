import Style from "./inicial.module.css";

function Inicial( props )
{
    return(
        <figure className={Style.inicial}>
             <img src={props.inicial} alt= ""/>
        </figure>
    )
}
export default Inicial;