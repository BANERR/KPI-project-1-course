//Style
import './benefitsInformation.css'

//images
import VectorLine from '../../images/VectorLine.png'
import Vector4 from '../../images/Vector 4.png'
import rafiki from '../../images/rafiki.png'
import Speedometer from '../../images/Speedometer.png'

const BenefitsInformation = () => {
    return(
        <div className="benefits-information-wrapper">
            <img src={VectorLine} alt="" className="benefits-information-container-background-img"/>
            <img src={Vector4} alt="" className="benefits-information-container-background-vector"/>
            <div className="benefits-information-container">
                <img src={Speedometer} alt="" className="benefits-information-container-img"/>
                <div className="benefits-information-text-container">
                    <div className="benefits-information-title subtitle-text">Швидкість</div>
                    <div className="benefits-information-text small-text">Швидкість тестування CQR підбирає під ваші потреби. Базовим вимогам відповідає тест зі швидкістю до 1 ГБ/сек. Спеціальні потреби покриваються тестами вашої системи зі швидкістю 10-20 ГБ/сек.</div>
                </div>
            </div>

            <div className="benefits-information-container">
                <div className="benefits-information-text-container">
                    <div className="benefits-information-title subtitle-text">ANTI-DDOS Рішення</div>
                    <div className="benefits-information-text small-text">Ми допомагаємо зрозуміти які саме рішення підходять для вашої організації та інфраструктури.</div>
                    <div className="benefits-information-text small-text">У фінальний звіт тестування також увійдуть рекомендації щодо інтеграції WAF, Firewall та найкращі, з наявних на ринку, ANTI-DDOS рішення, включаючи хмарні.</div>
                </div>
                <img src={rafiki} alt="" className="benefits-information-container-img-rafiki"/>
            </div>
        </div>
    )
}

export default BenefitsInformation;