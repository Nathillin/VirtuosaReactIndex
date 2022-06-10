import Header from '../components/header/header';
import Home from '../components/home/home';
import Footer from '../components/footer/footer';
import Contacto from '../components/contacto/Contacto';
import ImgContacto from '../components/assets/img/tips/imgContactanos.png';
import '../components/contacto/Contacto.css'

import '../components/assets/css/inicio.css'

function Contact() {
    return (
        <div>
            <Header />
            <Home />
            <img className='circle' src={ImgContacto} alt="" width="100%"/>
            <Contacto/>
            <Footer/>
        </div>
    )
}

export default Contact;