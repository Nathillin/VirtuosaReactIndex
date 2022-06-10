import Header from '../components/header/header';
import Home from '../components/home/home';
import Footer from '../components/footer/footer';
import Nosotrosv from '../components/nosotros/Nosinfo';

import '../components/assets/css/inicio.css'

function Nosotros() {
    return (
        <div>
            <Header />
            <Home />
            <Nosotrosv/>
            <Footer/>
        </div>
    )
}

export default Nosotros;