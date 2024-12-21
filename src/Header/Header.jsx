import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(props){
    const {burgerFunc} = props;
    return (
        <div className="header">
            <div className="header__logo">ROBOCAR</div>
            <ul className="header__nav">
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/news">Новини</Link></li>
                <Link to="/shop"><li className="header__btn">Магазин</li></Link>
            </ul>
            <div className="burger-menu" onClick={burgerFunc}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
        </div>
    )
}