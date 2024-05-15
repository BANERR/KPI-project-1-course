//Style
import './testingReportInfo.css'

//images
import backgroundSimple from '../../images/background-simple.png'
import Vector15 from '../../images/Vector 15.png'

const TestingReportInfo = () => {
    return(
        <div className="testing-report-info-wrapper">
            <img src={backgroundSimple} alt="" className="testing-report-info-backgound-img"/>
            <img src={Vector15} alt="" className="testing-report-info-vactor-img"/>
            <div className="testing-report-info-title subtitle-text">Що ви отримаєте у підсумковому звіті тестування</div>
            <div className="testing-report-info-container">
                <div className="testing-report-info-item" style={{top: '3vw'}}>
                    <div className="testing-report-info-cicle-background">
                        <div className="testing-report-info-cicle subtitle-text">1</div>
                    </div>

                    <div className="testing-report-info-text">Кордони швидкості роботи всієї мережі</div>
                </div>
                <div className="testing-report-info-item" style={{top: '8vw'}}>
                    <div className="testing-report-info-cicle-background">
                        <div className="testing-report-info-cicle subtitle-text">2</div>
                    </div>

                    <div className="testing-report-info-text" style={{width: '80%'}}>Показники швидкості роботи ПЗ</div>
                </div>
                <div className="testing-report-info-item">
                    <div className="testing-report-info-cicle-background">
                        <div className="testing-report-info-cicle subtitle-text">3</div>
                    </div>

                    <div className="testing-report-info-text">Всю інформацію про швидкість роботи обладнання</div>
                </div>
            </div>
        </div>
    )
}

export default TestingReportInfo;