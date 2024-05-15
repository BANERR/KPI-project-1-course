//Style
import './bigInformation.css'

//images
import Group8 from '../../images/Group 8.png'
import Vector from '../../images/Vector.png'
import Vector1 from '../../images/Vector(1).png'
import Vector2 from '../../images/Vector(2).png'
import Rectangle10 from '../../images/Rectangle 10(1).png'


const BigInformation = () => {
  return (
    <div className="big-information-wrapper">
        <img src={Vector} alt="" className="big-information-style-img" style={{top: '1vw', left: '1vw', width: '14vw'}}/>
        <img src={Vector1} alt="" className="big-information-style-img" style={{top: '0', right: '7vw', width: '14vw'}}/>
        <img src={Vector2} alt="" className="big-information-style-img" style={{top: '25vw', right: '5vw', width: '6vw'}}/>
        <img src={Rectangle10} alt="" className="big-information-style-img" style={{bottom: '0', right: '30vw', width: '14vw'}}/>

        <div className="big-information-container">
            <div className="big-information-title subtitle-text">Що таке тестування WHITEBOX?</div>
            <div className="big-information-text-wrapper">
                <img src={Group8} alt="" class="big-information-img"/>
                <div className="big-information-text-container small-text">
                    <div className="big-information-text">Пентест "Білого ящику", також відомий як прозорий або внутрішній пентест, - це тип оцінки кібербезпеки, в якому тестувальник має повні знання і доступ до системи, що тестується. Це може включати доступ до вихідного коду, конфігураційних файлів, внутрішньої мережевої інфраструктури, проектної документації та інших деталей реалізації.</div>
                    <div className="big-information-text">Під час тестування "Білого ящика" ми зосереджуємося на внутрішній структурі системи і намагаємося виявити дефекти та вразливості, вивчаючи код і дизайн системи. Ми використовуємо різні методи, такі як перегляд коду, тестування логіки окремих функцій і модулів, а також тестування внутрішніх структур даних системи.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigInformation;