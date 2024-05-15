//Style
import './boxesSecurity.css'

//images
import frame161 from '../../images/frame16(1).png'
import frame162 from '../../images/frame16(2).png'
import frame41 from '../../images/frame41.png'
import smallBackgroundImg from '../../images/smallBackgroundImg.png'

const BoxesSecurity = ({boxesData, title}) =>{
    return(
        <div className="boxes-security-wrapper">
            <img src={frame161} alt="" style={{position: 'absolute', top: '0', left: '0', height: 'auto', width: '20%'}}/>
            <img src={frame162} alt="" style={{position: 'absolute', top: '2vw', right: '0', zIndex: '1', height: 'auto', width: '20%'}}/>
            <img src={frame41} alt="" style={{position: 'absolute', top: '3.4vw', right: '20%', zIndex: '1', height: 'auto', width: '20%'}}/>

            <div className="boxes-security-container">
                <div className="boxes-security-title subtitle-text">{title}</div>
                <div className="boxes-security-items">
                    {
                        boxesData.map((box)=>{
                            return(
                                <div className="boxes-security-item">
                                    <img src={smallBackgroundImg} alt="" className="boxes-security-item-background-img"/>
                                    <img src={box.image} alt="" className="boxes-security-item-img"/>
                                    <div className="boxes-security-item-title small-text">{box.title}</div>
                                    <div className="boxes-security-item-text small-text">{box.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BoxesSecurity