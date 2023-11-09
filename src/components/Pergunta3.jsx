import {useState} from "react";

function Pergunta3(props) {

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
        props.setEtapa(4)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
        <h1 className="titulo">O que significa a palavra "Halloween"?</h1>
            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}> Dia dos Mortos</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 1)} style={{backgroundColor: botoes[1]}}> Sexta-feira 13</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 2)} style={{backgroundColor: botoes[2]}}>Dia das bruxas</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 3)} style={{backgroundColor: botoes[3]}}>Dia de todos os santos </button>
            </div>

        </div>
    )
}
export default Pergunta3