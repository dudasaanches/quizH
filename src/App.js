import Banner from "./components/Banner";
import Pergunta1 from "./components/Pergunta1";
import Pergunta2 from "./components/Pergunta2";
import Pergunta3 from "./components/Pergunta3";
import Pergunta4 from "./components/Pergunta4";
import Pergunta5 from "./components/Pergunta5";
import Pergunta6 from "./components/Pergunta6";
import Pergunta7 from "./components/Pergunta7";
import Pergunta8 from "./components/Pergunta8";
import Pergunta9 from "./components/Pergunta9";
import Pergunta10 from "./components/Pergunta10";
import TelaFinal from "./components/TelaFinal";
import {useState} from "react";

function App() {
    const [etapa, setEtapa] = useState(0)
    const [pontos, setPontos] = useState(0)


  return (
    <div className="App">
        {etapa === 0 && <Banner etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Banner>}
        {etapa === 1 && <Pergunta1 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta1>}
        {etapa === 2 && <Pergunta2 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta2>}
        {etapa === 3 && <Pergunta3 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta3>}
        {etapa === 4 && <Pergunta4 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta4>}
        {etapa === 5 && <Pergunta5 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta5>}
        {etapa === 6 && <Pergunta6 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta6>}
        {etapa === 7 && <Pergunta7 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta7>}
        {etapa === 8 && <Pergunta8 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta8>}
        {etapa === 9 && <Pergunta9 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta9>}
        {etapa === 10 && <Pergunta10 etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></Pergunta10>}
        {etapa === 11 && <TelaFinal etapa={etapa} setEtapa={setEtapa} pontos={pontos} setPonto={setPontos}></TelaFinal>}
    </div>
  );
}

export default App;
