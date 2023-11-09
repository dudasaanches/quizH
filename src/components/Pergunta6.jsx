import {useState} from "react";

function Pergunta6(props) {

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
        props.setEtapa(7)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo">O que as pessoas faziam para afastar os maus espíritos no Halloween, de acordo com a tradição celta?</h1>

            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}> Acendiam velas</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 1)} style={{backgroundColor: botoes[1]}}> Usavam fantasias e mascaras</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 2)} style={{backgroundColor: botoes[2]}}> Cantavam</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 3)} style={{backgroundColor: botoes[3]}}> Plantavam árvore</button>
            </div>
        </div>
    )
}
export default Pergunta6