import Header from '../components/header/header';
import Home from '../components/home/home';
import Footer from '../components/footer/footer';
import TipsCl from '../components/tipsR/TipsR';

import '../components/assets/css/inicio.css'

function TipsRp() {
    return (
        <div>
            <Header />
            <Home />
            <TipsCl/>
            <Footer/>
        </div>
    )
}

export default TipsRp;