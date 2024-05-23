//Style
import './analyzesInformation.css'

//images
import Element from '../../images/Element.png'

const AnalyzesInformation = ({image, title, textList}) => {
    return(
        <div className="analyzes-information-wrapper">
            <img src={Element} alt="" className="analyzes-information-background-img"/>
            <div className="analyzes-information-container">
                <div className="analyzes-information-text-container" style={{alignItems: image ? 'left' : 'center'}}>
                    <div className="analyzes-information-title subtitle-text" style={{textAlign: image ? 'left' : 'center'}}>{title}</div>
                    {
                        textList.map((text, index) => {
                            return (
                                <div 
                                    className="analyzes-information-text big-information-text small-text" 
                                    style={{textAlign: image ? 'left' : 'center'}}
                                    key={`analyzes-information-text-${index}`}>
                                    {text}
                                </div>
                            )
                        })
                    } 
                </div>
                {
                    image ? <img src={image} alt="" className="analyzes-information-img"/> : null
                }
            </div>
        </div>
    )
}

export default AnalyzesInformation;