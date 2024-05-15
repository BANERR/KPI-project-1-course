//Style
import './footer.css'

//images
import logo1 from '../../images/logo1.png'

const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <img src={logo1} alt="logo1" className="header-navbar-logo"/>
                    <div className="footer-text small-text">Швидка допомога у разі виникнення будь-якихкібератак та профілактика кіберзагроз для малого, середнього та великого бізнесу.</div>
                </div>
                <div className="footer-offerings-container">
                    <div className="footer-title-text">Послуги</div>
                    <div className="footer-text small-text">Аудит інформаційної безпеки</div>
                    <div className="footer-text small-text">Захист від несанкціонованого доступу</div>
                    <div className="footer-text small-text">Навчання з кібербезпеки</div>
                    <div className="footer-text small-text">Розслідування інцидентів</div>
                    <div className="footer-text small-text">Програмне забезпечення кіберзахисту</div>
                    <div className="footer-text small-text">Пентест</div>
                    <div className="footer-text small-text">Захист сайтів від зломів</div>
                    <div className="footer-text small-text">Захист від DDOS атак</div>
                    <div className="footer-text small-text">Консалтинг у сфері кібербезпеки</div>
                </div>
                <div className="footer-company-information-container">
                    <div className="footer-title-text">Послуги</div>
                    <div className="footer-text small-text">Про нас</div>
                    <div className="footer-text small-text">Кейси</div>
                    <div className="footer-text small-text">Навчання з кібербезпеки</div>
                    <div className="footer-text small-text">Питання та відповіді</div>
                    <div className="footer-text small-text">Партнерство</div>
                    <div className="footer-text small-text">Кар’єра</div>
                </div>
                <div className="footer-contacts-information-container">
                    <div className="footer-title-text">Контакти</div>
                    <div className="footer-text small-text">Україна, Київ 04080, вул. Світлицького 35</div>
                    <div className="footer-text small-text" style={{color:'#17EAD9'}}>+38 (068) 988 61 68</div>
                    <div className="footer-text small-text" style={{color:'#17EAD9'}}>banerr2006@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;