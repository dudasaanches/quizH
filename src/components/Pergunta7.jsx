import {useState} from "react";

function Pergunta1(props) {

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
        props.setEtapa(8)
    }

    return(
        <div className="pergunta" style={{backgroundImage: "url(/quiz3.png)"}}>
            <h1 className="titulo">Qual o nome dado à abóbora esculpida utilizada como decoração de Halloween?</h1>

            <div className={"btns"}>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 0)} style={{backgroundColor: botoes[0]}}> Espírito do mal</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 1)} style={{backgroundColor: botoes[1]}}>Lanterna macabra</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("errado", 2)} style={{backgroundColor: botoes[2]}}>Lanterna do medo</button>
                <button className="btn" disabled={desativo} onClick={() => resposta("certo", 3)} style={{backgroundColor: botoes[3]}}> Jack-o'- lantern</button>
            </div>
        </div>
    )
}
export default Pergunta1