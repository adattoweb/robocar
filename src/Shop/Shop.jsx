import './Shop.css'
import telegram from '../assets/telegram.png'
import phone from '../assets/phone.png'
import shopList from '../shop.json'
import { useState } from 'react'

export default function Shop(){
    const [isModal, setIsModal] = useState(false)
    const [propsModal, setPropsModal] = useState([])
    const ShopModal = () => {
        const [title, desc, price, saleprice, imageurl] = propsModal;
        const [isSale, setIsSale] = useState(true)
        if(saleprice === 0 && isSale === true) setIsSale(false)
        console.log(title)
        return(
            isModal && (<div className="shop__modal">
                <div className="modal__close" onClick={() => setIsModal(false)}>X</div>
                <h3 className="modal__header">Деталі товару</h3>
                <div className="shop__blocks">
                    <div className="shop__one">
                        <img src={imageurl} alt="" />
                        <div className="shop__contacts">
                            <p>Контакти</p>
                            <div className="shop__modal__citem">
                                <img src={phone} alt="" />
                                <p>050-123-4567</p>
                            </div>
                            <div className="shop__modal__citem">
                                <img src={telegram} alt="" />
                                <p>@nickname</p>
                            </div>
                        </div>
                        <div className={isSale ? "shop__modal__price sale" : "shop__modal__price"}>{price} грн {isSale && <p>{saleprice} грн</p>}</div>
                    </div>
                    <div className="shop__two">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>)
        )
    }



    const ShopItem = (props) => {
        const [isSale, setIsSale] = useState(true)
        const {title, desc, shortdesc, price, saleprice = 0, imageurl} = props;
        if(saleprice === 0 && isSale === true) setIsSale(false)
        return(
            <div className="shop__item">
                <img src={imageurl} alt="" />
                <h4>{title}</h4>
                <p>{shortdesc}</p>
                <div className="shop__actions">
                    <div className="shop__button" onClick={() => {
                        setIsModal(true) 
                        setPropsModal([title, desc, price, saleprice, imageurl])
                        }}>Купити</div>
                    <div className={isSale ? 'shop__price sale' : 'shop__price'}>{price} грн {isSale && <p>{saleprice} грн</p>}</div>
                </div>
            </div>
        )
    }



    return (
        isModal ? <ShopModal/> :<div className="shop__parent">
            <h3>МАГАЗИН</h3>
            <div className="shop__container">
                {shopList.map(el => {
                    return (<ShopItem key ={el.id} title={el.title} desc={el.desc} shortdesc={el.shortdesc} price={el.price} saleprice={el.saleprice} imageurl={el.imageurl}/>)
                })}
            </div>
        </div>
    )
}