//Style
import './supportArea.css'

//images
import suportAreaBackgound from '../../images/suportAreaBackgound.png'

const SupportArea = () => {
    return(
        <div className="support-area-wrapper">
            <img src={suportAreaBackgound} className="support-area-backgound" alt=""/>
            <div className="support-area-container">
                <div className="support-area-text-container">
                    <div className="support-area-subtitle">Форма зворотного зв’язку</div>
                    <div className="support-area-title subtitle-text">Залишились питання?</div>
                    <div className="support-area-text small-text">Для зв’язку з керівництвом компанії, скористайтеся спеціальною формою:</div>
                </div>
                <div className="support-area-inputs-container">
                    <input type="text" placeholder="Ім'я" className="support-area-input"/>
                    <input type="email" placeholder="E-mail" className="support-area-input"/>
                    <input type="tel" placeholder="Контактний телефон" className="support-area-input"/>
                    <input type="text" placeholder="Повідомлення" className="support-area-input"/>
                    <button className="boxes-information-button gradient-button small-text">НАДІСЛАТИ</button>
                </div>
            </div>
        </div>
    )
}

export default SupportArea;