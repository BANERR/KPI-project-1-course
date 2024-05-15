//Style
import './analyzesInformation.css'

//images
import NothingHere from '../../images/Nothing here.png'
import Element from '../../images/Element.png'

const AnalyzesInformation = () => {
    return(
        <div className="analyzes-information-wrapper">
            <img src={Element} alt="" className="analyzes-information-background-img"/>
            <div className="analyzes-information-container">
                <div className="analyzes-information-text-container">
                    <div className="analyzes-information-title subtitle-text">Аналіз безпеки програмного коду</div>
                    <div className="analyzes-information-text big-information-text small-text">Під час проведення аудиту безпеки методом "Білого ящику" для виявлення різноманітних вразливостей у програмному коді наші фахівці проводять детальний ручний аналіз, а також використовують передові методології та сучасні рішення, зокрема, нашу платформу CryEye, що містить безліч автоматизацій та інструментів для сканування вихідного коду, написаного будь-якою із сучасних мов програмування.</div>
                    <div className="analyzes-information-text big-information-text small-text">Наша платформа Cryeye містить адаптований аналізатор коду з нахилом на безпеку, який визначає всі жорстко закодовані паролі та токени, перевіряє наявність їхніх витоків у репозиторіях, а також підказує, які конструкції та залежності в коді є небезпечними.</div>
                </div>
                <img src={NothingHere} alt="" className="analyzes-information-img"/>
            </div>
        </div>
    )
}

export default AnalyzesInformation;