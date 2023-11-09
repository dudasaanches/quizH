import {useState} from "react";

function Pergunta4(props) {

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
        props.setEtapa(5)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo" className="titulo">O que significa R.I.P. em português?</h1>
            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 0)} style={{backgroundColor: botoes[0]}}> Descanse em paz</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 1)} style={{backgroundColor: botoes[1]}}> Divirta-se</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 2)} style={{backgroundColor: botoes[2]}}> Vá em paz</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 3)} style={{backgroundColor: botoes[3]}}> Até logo</button>
            </div>
        </div>
    )
}
export default Pergunta4