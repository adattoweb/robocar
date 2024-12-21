import './About.css'
import about from '../../assets/bortovik.png'
import Important from '../../Important'

export default function About(){
    return (
        <div className="about__block block">
            <div className="about__text">
                <h3 className="about__header">МИ СТВОРЮЄМО <Important>ЯКІСНІ</Important> БОРТОВИКИ</h3>
                <p className="about__desc">Наша компанія розробляє, виробляє та продає якісні й доступні бортові комп’ютери. Ми прагнемо створювати зручні у використанні пристрої за оптимальною ціною.</p>
                <div className="button">Магазин</div>
            </div>
            <div className="about__img">
                <img src={about} alt="" />
            </div>
        </div>
    )
}