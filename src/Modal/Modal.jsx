import './Modal.css'
import { Link } from 'react-router-dom';

export default function ModalMenu(props){
    const {burgerFunc} = props;
    return(
        <div className="modalmenu">
            <div className="modalmenu__close" onClick={burgerFunc}>X</div>
            <ul className="modalmenu__list">
                <Link to="/" onClick={burgerFunc}><li>Головна</li></Link>
                <Link to="/News" onClick={burgerFunc}><li>Новини</li></Link>
                <Link to="/Shop" onClick={burgerFunc}><li>Магазин</li></Link>
            </ul>
        </div>
    )
}