import css from './Banner.module.css'
function Banner (props) {
    function Mudar() {
       props.setEtapa(1)
    }

    return (
        <div className={css.img} style={{backgroundImage: "url(/quizz.png)"}}>

            <button className={css.btn} onClick={Mudar}>Começar</button>
        </div>
    )
}
export default Banner