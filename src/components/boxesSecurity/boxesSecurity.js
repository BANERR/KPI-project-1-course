//Style
import './boxesSecurity.css'

//images
import frame161 from '../../images/frame16(1).png'
import frame162 from '../../images/frame16(2).png'
import frame41 from '../../images/frame41.png'
import smallBackgroundImg from '../../images/smallBackgroundImg.png'
import image32 from '../../images/image32.png'

const BoxesSecurity = () =>{
    return(
        <div className="boxes-security-wrapper">
            <img src={frame161} alt="" style={{position: 'absolute', top: '0', left: '0', height: 'auto', width: '20%'}}/>
            <img src={frame162} alt="" style={{position: 'absolute', top: '2vw', right: '0', zIndex: '1', height: 'auto', width: '20%'}}/>
            <img src={frame41} alt="" style={{position: 'absolute', top: '3.4vw', right: '20%', zIndex: '1', height: 'auto', width: '20%'}}/>

            <div className="boxes-security-container">
                <div className="boxes-security-title subtitle-text">Що забезпечує тестування WHITEBOX?</div>
                <div className="boxes-security-items">
                    <div className="boxes-security-item">
                        <img src={smallBackgroundImg} alt="" className="boxes-security-item-background-img"/>
                        <img src={image32} alt="" className="boxes-security-item-img"/>
                        <div className="boxes-security-item-title small-text">Виберіть те, що вам потрібно</div>
                        <div className="boxes-security-item-text small-text">Проведення тестування "Білого ящика" має незаперечні переваги перед "Чорним ящиком", оскільки набагато швидше та простіше вирішити проблеми безпеки і звести до мінімуму ризик їх існування.</div>
                    </div>
                    <div className="boxes-security-item">
                        <img src={smallBackgroundImg} alt="" className="boxes-security-item-background-img"/>
                        <img src={image32} alt="" className="boxes-security-item-img"/>
                        <div className="boxes-security-item-title small-text">Час для тесту</div>
                        <div className="boxes-security-item-text small-text">Пентест безпеки "Білого ящика" зазвичай виконується на заключних етапах розробки, перед випуском продукту на ринок або безпосередньо перед використанням цільового програмного забезпечення, систем та інфраструктури компанії.</div>
                    </div>
                    <div className="boxes-security-item">
                        <img src={smallBackgroundImg} alt="" className="boxes-security-item-background-img"/>
                        <img src={image32} alt="" class="boxes-security-item-img"/>
                        <div className="boxes-security-item-title small-text">Актуальність WhiteBox</div>
                        <div className="boxes-security-item-text small-text">Метод і обсяг Whitebox пентесту визначаються замовником залежно від вимог безпеки до досліджуваному об'єкту. Чим суворіші вимоги, тим більш актуальним стає тестування "Білого ящика".</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxesSecurity