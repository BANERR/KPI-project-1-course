//Style
import './miniInformation.css'

//images
import frame16 from '../../images/frame16.png'
import avatar from '../../images/avatar.png'

const MiniInformation = () => {
    return(
        <div className="mini-information-wrapper">
            <div className="mini-information-container">
                <div className="mini-information-text-container">
                    <div className="mini-information-title subtitle-text">Lorem ipsum dolor sit amet</div>
                    <div className="mini-information-text small-text">Lorem ipsum dolor sit amet. Aut tenetur vero hic blanditiis cumque ut rerum quibusdam ut natus magnam qui autem quas.</div>

                    <div className="mini-information-buttons-container">
                        <button className="mini-information-demo-button gradient-button small-text">Отримати Demo</button>
                        <button className="mini-information-question-button small-text">Задати питання</button>
                    </div>
                </div>

                <div className="mini-information-avatar-container">
                    <img src={frame16} alt="" className="mini-information-style-img" style={{bottom: 0, left: 0}}/>
                    <div className="mini-information-style-box"></div>
                    <div className="mini-information-style-box-background"></div>
                    <img src={avatar} alt="" className="mini-information-avatar"/>
                    <img src={frame16} alt="" className="mini-information-style-img" style={{right: 0, bottom: '4.5vw'}}/>
                </div>
            </div>
        </div>
    )
}

export default MiniInformation;