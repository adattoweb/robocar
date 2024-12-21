import './Contact.css'
import telegram from '../../assets/telegram.png';
import phone from '../../assets/phone.png';

export default function Contact(){
    return (
        <div className="contact__block block">
            <h3>КОНТАКТИ</h3>
            <div className="contact__container">
                <div className="contact__item">
                    <img src={phone} alt="" />
                    <p>050-123-4567</p>
                </div>
                <div className="contact__item">
                    <img src={telegram} alt="" />
                    <p>@nickname</p>
                </div>
            </div>
        </div>
    )
}