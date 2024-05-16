//Style
import './diagramInformation.css'

//images
import heroBg from '../../images/hero-bg.png'
import Line1 from '../../images/Line 1.png'
import Line2 from '../../images/Line 2.png'
import Line3 from '../../images/Line 3.png'
import Line4 from '../../images/Line 4.png'
import Line5 from '../../images/Line 5.png'

const DiagramInformation = () => {
    return(
        <div className="diagram-information-wrapper">
            <img src={heroBg} alt="" className="diagram-information-img"/>
            <div className="diagram-information-title subtitle-text">Види соціальної інженерії, які ми виконуємо</div>
            <div className="diagram-information-container">
                <div className="diagram-information-item" style={{bottom: '4vw', width: '15vw'}}>
                    <div className="diagram-information-text small-text">Атаки, що використовують експлойти додатків</div>
                    <img src={Line1} alt="" className="diagram-information-line"/>
                </div>
                <div className="diagram-information-item" style={{bottom: '6vw', width: '10vw'}}>
                    <div className="diagram-information-text small-text">Фізична атака на девайси</div>
                    <img src={Line2} alt="" className="diagram-information-line"/>
                </div>
                <div className="diagram-information-item" style={{bottom: '8vw', width: '10vw'}}>
                    <div className="diagram-information-text small-text">Атаки по мережах</div>
                    <img src={Line3} alt="" className="diagram-information-line"/>
                </div>
                <div className="diagram-information-item" style={{bottom: '10vw', width: '13vw'}}>
                    <div className="diagram-information-text small-text">Атаки у соціальних мережах</div>
                    <img src={Line4} alt="" className="diagram-information-line"/>
                </div>
                <div className="diagram-information-item" style={{bottom: '10vw', width: '7vw'}}>
                    <div className="diagram-information-text small-text">Імейл-атаки</div>
                    <img src={Line5} alt="" className="diagram-information-line"/>
                </div>
            </div>
        </div>
    )   
}

export default DiagramInformation;