//Components
import Header from "../components/header/header";
import BigInformation from "../components/bigInformation/bigInformation";
import BoxesSecurity from "../components/boxesSecurity/boxesSecurity";
import MiniInformation from "../components/miniInformation/miniInformation";
import AnalyzesInformation from "../components/analyzesInformation/analyzesInformation";
import SupportArea from "../components/supportArea/supportArea";
import Footer from "../components/footer/footer";

//images
import bro from '../images/bro.png'
import Group8 from '../images/Group 8.png'
import NothingHere from '../images/Nothing here.png'
import image32 from '../images/image32.png'

const data = {
  headerImage: bro,
  headerTitle: 'SCR',
  headerSubtitle: 'Аналіз коду безпеки',
  headerText: 'У White Box пентестери CQR проводять детальне тестування на проникнення в кібербезпеку вашої системи.',

  bigInfoTitle: 'Що таке тестування WHITEBOX?',
  bigInfoImage: Group8,
  bigInfoText: [
    'Пентест "Білого ящику", також відомий як прозорий або внутрішній пентест, - це тип оцінки кібербезпеки, в якому тестувальник має повні знання і доступ до системи, що тестується. Це може включати доступ до вихідного коду, конфігураційних файлів, внутрішньої мережевої інфраструктури, проектної документації та інших деталей реалізації.',
    'Під час тестування "Білого ящика" ми зосереджуємося на внутрішній структурі системи і намагаємося виявити дефекти та вразливості, вивчаючи код і дизайн системи. Ми використовуємо різні методи, такі як перегляд коду, тестування логіки окремих функцій і модулів, а також тестування внутрішніх структур даних системи.'
  ],

  analyzesInfoImage: NothingHere,
  analyzesInfoTitle: 'Аналіз безпеки програмного коду',
  analyzesInfoText: [
    'Під час проведення аудиту безпеки методом "Білого ящику" для виявлення різноманітних вразливостей у програмному коді наші фахівці проводять детальний ручний аналіз, а також використовують передові методології та сучасні рішення, зокрема, нашу платформу CryEye, що містить безліч автоматизацій та інструментів для сканування вихідного коду, написаного будь-якою із сучасних мов програмування.',
    'Наша платформа Cryeye містить адаптований аналізатор коду з нахилом на безпеку, який визначає всі жорстко закодовані паролі та токени, перевіряє наявність їхніх витоків у репозиторіях, а також підказує, які конструкції та залежності в коді є небезпечними.'
  ],

  boxesSecurityTitle: 'Що забезпечує тестування WHITEBOX?',
  boxesSecurityData: [
    {
      title: 'Виберіть те, що вам потрібно',
      text: 'Проведення тестування "Білого ящика" має незаперечні переваги перед "Чорним ящиком", оскільки набагато швидше та простіше вирішити проблеми безпеки і звести до мінімуму ризик їх існування.',
      image: image32
    },
    {
      title: 'Час для тесту',
      text: 'Пентест безпеки "Білого ящика" зазвичай виконується на заключних етапах розробки, перед випуском продукту на ринок або безпосередньо перед використанням цільового програмного забезпечення, систем та інфраструктури компанії.',
      image: image32
    },
    {
      title: 'Актуальність WhiteBox',
      text: 'Метод і обсяг Whitebox пентесту визначаються замовником залежно від вимог безпеки до досліджуваному об`єкту. Чим суворіші вимоги, тим більш актуальним стає тестування "Білого ящика".',
      image: image32
    }
  ]
}

const Src = () => {
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
        <BoxesSecurity
          boxesData={data.boxesSecurityData}
          title={data.boxesSecurityTitle}
        />
        <MiniInformation/>
        <AnalyzesInformation
          image={data.analyzesInfoImage}
          title={data.analyzesInfoTitle}
          textList={data.analyzesInfoText}
        />
        <SupportArea/>
        <Footer/>
      </>
    );
  }
  
  export default Src;