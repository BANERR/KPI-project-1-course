//Style
import './testingInformation.css'

//images
import smallBackgroundImg from '../../images/smallBackgroundImg.png'
import solarSettingsBold from '../../images/solar_settings-bold.png'
import ionSpeedometer from '../../images/ion_speedometer.png'
import jamShieldCheckF from '../../images/jam_shield-check-f.png'

const TestingInformation = () => {
    return(
        <div className="testing-information-boxes-wrapper">
            <div className="testing-information-boxes-title subtitle-text">Мета тестування</div>
            <div className="testing-information-boxes-container">
                <div class="testing-information-boxes-item">
                    <img src={smallBackgroundImg} alt="" className="testing-information-boxes-backgound-img"/>
                    <img src={solarSettingsBold} alt="" className="testing-information-boxes-img"/>
                    <div className="testing-information-boxes-text small-text">Визначте всі недоліки безпеки, вразливості системи та ризики для продуктивності</div>
                </div>

                <div className="testing-information-boxes-item">
                    <img src={smallBackgroundImg} alt="" className="testing-information-boxes-backgound-img"/>
                    <img src={ionSpeedometer} alt="" className="testing-information-boxes-img"/>
                    <div className="testing-information-boxes-text small-text">Точно визначити швидкість завантаження та обробки даних</div>
                </div>

                <div className="testing-information-boxes-item">
                    <img src={smallBackgroundImg} alt="" className="testing-information-boxes-backgound-img"/>
                    <img src={jamShieldCheckF} alt="" className="testing-information-boxes-img"/>
                    <div className="testing-information-boxes-text small-text">Визначте надійність вашої системи за допомогою наших рішень для тестування продуктивності</div>
                </div>
            </div>
        </div>
    )
}

export default TestingInformation;