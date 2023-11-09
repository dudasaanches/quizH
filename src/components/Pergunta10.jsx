import {useState} from "react";

function Pergunta10(props) {

    const [botoes,setBotoes] = useState([
        "orange",
        "orange",
        "orange",
        "orange"
    ])

    const [desativo, setDesativo] = useState(false)

    function resposta(valor, posi){
        let aux = botoes
        setDesativo(true)

        if (valor === "certo") {
            aux[posi] = "green"
            /// Da o ponto aqui
            props.setPonto(props.pontos+100)
        }

        if (valor === "errado"){
            aux[posi] = "red"
        }

        setBotoes([...aux])

        setTimeout(Mudar, 100)
    }

    function Mudar() {
        props.setEtapa(11)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo">Qual o significado das cores tradicionais do Halloween, laranja e preto?</h1>

            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}>Alegria(laranja) / tristeza (preto) </button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 1)} style={{backgroundColor: botoes[1]}}> Medo(laranja) / escuridão(preto)</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 2)} style={{backgroundColor: botoes[2]}}> Energia e vitalidade(laranja) / proteção(preto)</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 3)} style={{backgroundColor: botoes[3]}}>Espiritualidade (laranja) / mistério(preto)</button>
            </div>
        </div>
    )
}
export default Pergunta10