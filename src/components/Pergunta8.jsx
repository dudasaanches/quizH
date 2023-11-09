import {useState} from "react";

function Pergunta8(props) {

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
        props.setEtapa(9)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo">Nos EUA, o que as crianças falam ao baterem nas portas pedindo doces?</h1>
            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}>Boo</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 1)} style={{backgroundColor: botoes[1]}}> Trick or treaks</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 2)} style={{backgroundColor: botoes[2]}}> suger or travessure</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 3)} style={{backgroundColor: botoes[3]}}> trick your treeths</button>
            </div>
        </div>
    )
}
export default Pergunta8