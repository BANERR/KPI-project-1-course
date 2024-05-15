//Components
import Header from "../components/header/header"
import BigInformation from '../components/bigInformation/bigInformation'
import AnalyzesInformation from '../components/analyzesInformation/analyzesInformation'
import MiniInformation from '../components/miniInformation/miniInformation'
import TestingInformation from '../components/testingInformation/testingInformation'
import TestingReportInfo from '../components/testingReportInfo/testingReportInfo'
import Footer from '../components/footer/footer'
import SupportArea from '../components/supportArea/supportArea'
import BenefitsInformation from '../components/benefitsInformation/benefitsInformation'

//images
import frame64 from '../images/frame64.png'
import Group81 from '../images/Group 8(1).png'
import BoxesSecurity from '../components/boxesSecurity/boxesSecurity'
import f7Desktopcomputer from '../images/f7_desktopcomputer.png'
import materialSymbolsLockClock from '../images/material-symbols_lock-clock.png'
import fluentPersonSearch24Filled from '../images/fluent_person-search-24-filled.png'

const data = {
  headerImage: frame64,
  headerTitle: '',
  headerSubtitle: 'Навантажене тестування вашого сайту',
  headerText: 'CQR - це компанія з тестування ефективності програмного забезпечення, яка пропонує всі види тестів ризиків продуктивності для ваших систем.',

  bigInfoTitle: 'Для чого потрібне тестування продуктивності?',
  bigInfoImage: Group81,
  bigInfoText: [
    'Тестування Продуктивності показує вам наскільки система, що тестується, стабільна. Також ви побачите показники продуктивності реакцій програми на інтенсивне зовнішнє навантаження. Для повноти картини CQR фахівці підбирають навантаження різного характеру та інтенсивності.',
    'Дивіться на свої технології очима ворога, щоб посилити засоби захисту. Тестування Продуктивності знаходить уразливість, фіксує стан безпеки системи та виявляє всі слабкі сторони.',
    'Ми глибоко перевіряємо вашу систему та мережеві ресурси, зміцнюємо всі слабкі місця, щоб кіберзлочинець не скористався вашою вразливістю.'
  ],

  analyzesInfoImage: null,
  analyzesInfoTitle: 'Аналіз безпеки програмного коду',
  analyzesInfoText: [
    'Під час проведення аудиту безпеки методом "Білого ящику" для виявлення різноманітних вразливостей у програмному коді наші фахівці проводять детальний ручний аналіз, а також використовують передові методології та сучасні рішення, зокрема, нашу платформу CryEye, що містить безліч автоматизацій та інструментів для сканування вихідного коду, написаного будь-якою із сучасних мов програмування.',
    'Наша платформа Cryeye містить адаптований аналізатор коду з нахилом на безпеку, який визначає всі жорстко закодовані паролі та токени, перевіряє наявність їхніх витоків у репозиторіях, а також підказує, які конструкції та залежності в коді є небезпечними.'
  ],

  boxesSecurityTitle: 'Завдання, які вирішує тестування продуктивності',
  boxesSecurityData: [
    {
      title: 'Перевірка роботи ПЗ',
      text: 'Тестування навантаження дозволяє оцінити продуктивність ПЗ в різних умовах (нормальні, максимально/мінімально допустиме навантаження, форс-мажори)',
      image: f7Desktopcomputer
    },
    {
      title: 'Довговічність',
      text: 'При тестуванні продуктивності видно як впливає тривале використання на його ефективність',
      image: materialSymbolsLockClock
    },
    {
      title: 'Об`єкти впливу',
      text: 'Наші фахівці визначать залежність продуктивності вашого ПЗ від кількості одночасного користування, одночасної реєстрації та великої кількості користувачів',
      image: fluentPersonSearch24Filled
    }
  ]
}

const LoadTestingYourSite = () => {
    return (
      <>
        <Header 
          image={data.headerImage} 
          title={data.headerTitle} 
          subtitle={data.headerSubtitle} 
          text={data.headerText} 
        />
        <BigInformation
          image={data.bigInfoImage}
          title={data.bigInfoTitle}
          textList={data.bigInfoText}
        />
        <AnalyzesInformation
          image={data.analyzesInfoImage}
          title={data.analyzesInfoTitle}
          textList={data.analyzesInfoText}
        />
        <MiniInformation/>
        <TestingInformation/>
        <TestingReportInfo/>
        <BenefitsInformation/>
        <BoxesSecurity
          boxesData={data.boxesSecurityData}
          title={data.boxesSecurityTitle}
        />
        <SupportArea/>
        <Footer/>
      </>
    );
  }
  
  export default LoadTestingYourSite;