import css from "./Banner.module.css";

function TelaFinal(props) {
    return(
        <div className={css.img} style={{backgroundImage: "url(/quiz2.png)"}}>
            <h1 className="pontuacao">Pontuação:{props.pontos}</h1>
        </div>
    )
}
export default TelaFinal