import './Footer.css'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-one">
                <div className="footer-info">
                    <h4>ROBOCAR</h4>
                    <p>
                {'Copyright © Robocar '+ new Date().getFullYear() + '. Всі права захищені.'}
                </p>
                </div>
            </div>
            <div className="footer-two">
                <p>Контакти веб-розробника</p>
                <a href="https://github.com/adattoweb" target="_blank" className="footer-two-item github">
                    <img src={github} alt="" />
                </a>
                <a href="https://t.me/adattoweb" target="_blank" className="footer-two-item telegram">
                    <img src={telegram} alt="" />
                </a>
            </div>
        </footer>
    )
}