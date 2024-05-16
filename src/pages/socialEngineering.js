//Components
import Header from "../components/header/header"
import BigInformation from '../components/bigInformation/bigInformation'
import BoxesSecurity from "../components/boxesSecurity/boxesSecurity"
import MiniInformation from "../components/miniInformation/miniInformation"
import SupportArea from "../components/supportArea/supportArea"
import Footer from "../components/footer/footer"
import DiagramInformation from "../components/diagramInformation/diagramInformation"
import AdditionalInformation from "../components/additionalInformation/additionalInformation"
import AnalyzesInformation from "../components/analyzesInformation/analyzesInformation"

//images
import pana from '../images/pana.png'
import Shield from '../images/Shield.png'
import f7Desktopcomputer from '../images/f7_desktopcomputer.png'
import pepiconsPencilFile from '../images/pepicons-pencil_file.png'
import fluentPersonSearch24Filled from '../images/fluent_person-lock-24-filled.png'

const data = {
  headerImage: pana,
  headerTitle: 'SCR',
  headerSubtitle: 'Аналіз коду безпеки',
  headerText: 'У White Box пентестери CQR проводять детальне тестування на проникнення в кібербезпеку вашої системи.',

  bigInfoTitle: 'Що таке соціальна інженерія і в чому її небезпека?',
  bigInfoImage: Shield,
  bigInfoText: [
    'Соціальна інженерія - це форма маніпулювання, що використовується окремими особами або групами осіб для обману інших людей і отримання доступу до конфіденційної інформації, систем або ресурсів. Вона передбачає використання людської психології, а не технічних засобів.',
    'Мета соціальної інженерії зазвичай полягає в тому, щоб обманом змусити людей розголосити конфіденційну інформацію, виконати дії, які можуть поставити під загрозу безпеку, або надати доступ до заборонених зон.'
  ],

  boxesSecurityTitle: 'Що забезпечує Соціальне тестування',
  boxesSecurityData: [
    {
      title: 'Моделювання та безпосереднє проведення соціальної інженерії',
      text: 'Соціальна інженерія може вважатися успішною якщо деякі зі співробітників вашої компанії не змогли зрозуміти, що листи чи листування були фіктивними, методами фішингу, і, використовуючи своє службове становище, видали інформацію, яка не повинна бути розкрита третім особам за жодних умов.',
      image: f7Desktopcomputer
    },
    {
      title: 'Докладний звіт про виконану роботу',
      text: 'Нами буде проведено глибокий аналіз того, наскільки ваші співробітники були готові до такого типу кібератаки, а також наскільки успішно вони змогли її запобігти. Після цього вам буде надано повний звіт, що містить докладний опис всіх векторів вчинених кібератак разом зі статистичними даними про те, які саме з них дали результати.',
      image: pepiconsPencilFile
    },
    {
      title: 'Підготовка ваших співробітників',
      text: 'Ми не тільки здійснюємо атаку соціальної інженерії, але й навчаємо ваших співробітників протистояти подібним кібератакам та будь-яким видам фішингу надалі. Також у рамках профілактики атак соціальної інженерії ми: проводимо тренінги з безпеки, антивірусів та засобів захисту кінцевих точок; здійснюємо тестування на проникнення; надаємо такі рішення, як SIEM та UEBA.',
      image: fluentPersonSearch24Filled
    }
  ],

  analyzesInfoImage: null,
  analyzesInfoTitle: 'Чому важливо знати про соціальну інженерію?',
  analyzesInfoText: [
    'Простіше кажучи, це означає, що ви маєте знати про виверти, які люди можуть використовувати, щоб змусити вас зробити те, чого робити не слід. Для компанії це означає, що всі мають знати про ці хитрощі, щоб запобігти потенційній шкоді. Це схоже на навчання всіх членів команди того, як розпізнати шахраїв і не попастися на них, щоб зберегти бізнес цілим і неушкодженим.'
  ]
}

const SocialEngineering = () => {
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
        <DiagramInformation/>
        <AdditionalInformation/>
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
  
export default SocialEngineering;