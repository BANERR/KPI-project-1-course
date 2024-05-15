//Style
import './bigInformation.css'

//images
import Vector from '../../images/Vector.png'
import Vector1 from '../../images/Vector(1).png'
import Vector2 from '../../images/Vector(2).png'
import Rectangle10 from '../../images/Rectangle 10(1).png'


const BigInformation = ({image, title, textList}) => {
  return (
    <div className="big-information-wrapper">
        <img src={Vector} alt="" className="big-information-style-img" style={{top: '1vw', left: '1vw', width: '14vw'}}/>
        <img src={Vector1} alt="" className="big-information-style-img" style={{top: '0', right: '7vw', width: '14vw'}}/>
        <img src={Vector2} alt="" className="big-information-style-img" style={{top: '25vw', right: '5vw', width: '6vw'}}/>
        <img src={Rectangle10} alt="" className="big-information-style-img" style={{bottom: '0', right: '30vw', width: '14vw'}}/>

        <div className="big-information-container">
            <div className="big-information-title subtitle-text">{title}</div>
            <div className="big-information-text-wrapper">
                <img src={image} alt="" className="big-information-img"/>
                <div className="big-information-text-container small-text">
                  {
                    textList.map((text) => {
                      return <div className="big-information-text">{text}</div>
                    })
                  } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigInformation;