//Style
import './header.css'

//images
import logo1 from '../../images/logo1.png'
import bro from '../../images/bro.png'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="header-navbar-container">
            <img src={logo1} alt="logo1" className="header-navbar-logo"/>

            <div className="header-navbar-tabs-container">
                <div className="header-navbar-tab small-text">
                    SRC
                </div>
                <div className="header-navbar-tab small-text">
                    Соціальна Інженерія
                </div>
                <div className="header-navbar-tab small-text">
                    Загружене тестування вошого сайту
                </div>
            </div>
        </div>
        <div className="header-information-container">
            <div className="header-information-data-container">
                <div className="header-information-data-title">SCR</div>
                <div className="header-information-data-subtitle subtitle-text">Аналіз коду безпеки</div>
                <div className="header-information-data-text small-text">У White Box пентестери CQR проводять детальне тестування на проникнення в кібербезпеку вашої системи.</div>
                <button className="header-information-button gradient-button small-text">ДЕТАЛЬНІШЕ</button>
            </div>

            <img src={bro} alt="frame64" className="header-information-img"/>
        </div>

        <div className="style-element"></div>
    </div>
  )
}

export default Header;