//Components
import Header from "../components/header/header";
import BigInformation from "../components/bigInformation/bigInformation";
import BoxesSecurity from "../components/boxesSecurity/boxesSecurity";
import MiniInformation from "../components/miniInformation/miniInformation";
import AnalyzesInformation from "../components/analyzesInformation/analyzesInformation";
import SupportArea from "../components/supportArea/supportArea";
import Footer from "../components/footer/footer";

const Dpl = () => {
    return (
      <>
        <Header/>
        <BigInformation/>
        <BoxesSecurity/>
        <MiniInformation/>
        <AnalyzesInformation/>
        <SupportArea/>
        <Footer/>
      </>
    );
  }
  
  export default Dpl;