//react
import { Link } from 'react-router-dom'

//Style
import './header.css'

//images
import logo1 from '../../images/logo1.png'

const Header = ({image, title, text, subtitle}) => {

    return (
        <div className="header-wrapper">
            <div className="header-navbar-container">
                <img src={logo1} alt="logo1" className="header-navbar-logo"/>

                <div className="header-navbar-tabs-container">
                    <Link className="header-navbar-tab small-text" to={'/'}>SRC</Link>
                    <Link className="header-navbar-tab small-text" to={'/socialEngineering'}>Соціальна Інженерія</Link>
                    <Link className="header-navbar-tab small-text" to={'/loadTestingYourSite'}>Загружене тестування вошого сайту</Link>
                </div>
                <div className="header-navbar-selector">Contact Us</div>
            </div>
            <div className="header-information-container">
                <div className="header-information-data-container">
                    {
                        title ? <div className="header-information-data-title">{title}</div> : null
                    }
                    
                    <div className="header-information-data-subtitle subtitle-text">{subtitle}</div>
                    <div className="header-information-data-text small-text">{text}</div>
                    <button className="header-information-button gradient-button small-text">ДЕТАЛЬНІШЕ</button>
                </div>

                <img src={image} alt="frame64" className="header-information-img"/>
            </div>
        </div>
    )
}

export default Header;