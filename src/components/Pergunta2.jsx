import {useState} from "react";

function Pergunta2(props) {

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
        props.setEtapa(3)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo">Por que o Brasil não comemora o Halloween?</h1>
            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}> Porque faz muito calor e ninguém merece se fantasiar nesse calor</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 1)} style={{backgroundColor: botoes[1]}}>Porque, no Brasil, dia 31 de Outubro é "Dia dos Mortos" </button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 2)} style={{backgroundColor: botoes[2]}}> Porque, no Brasil, dia 31 de Outubro é o "Dia do saci"</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 3)} style={{backgroundColor: botoes[3]}}> Mas é claro que o Brasil comemora o Halloween</button>
            </div>
        </div>
    )
}
export default Pergunta2