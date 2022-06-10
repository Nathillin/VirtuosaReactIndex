import Header from '../components/header/header';
import Home from '../components/home/home';
import Footer from '../components/footer/footer';
import TipsMk from '../components/tipsM/TipsM';

import '../components/assets/css/inicio.css'

function TipsM() {
    return (
        <div>
            <Header />
            <Home />
            <TipsMk/>
            <Footer/>
        </div>
    )
}

export default TipsM;