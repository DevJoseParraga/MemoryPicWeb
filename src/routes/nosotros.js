import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import Header from '../components/header';
import Footer from '../components/footer';
import './nosotros.css';
import Button from '../components/Button';
import ContactButton from '../components/contact-button';

const Nosotros = () => {
    
    useEffect(() => {
        ReactGA.send("pageview");
    }, []);

    return (
        <div className='container'>
            <Header title={'NOSOTROS'} isHome={false} backgroundImage={'header-pic.jpg'} />
            <ContactButton/>
            <main id='nosotrosContainer'>
            <div id='quienesSomosContainer'>
                <aside>
                    <h2 className="sectionTitle">¿Quiénes somos?</h2>
                    <p className="sectionText">Somos una empresa de entretenimiento fotográfico para eventos sociales y corporativos. Ofrecemos el servicio de cabinas fotográficas Led, para que puedas guardar todos tus recuerdos de la forma más entretenida.<br/><br/>
                        Contamos con un staff de profesionales en el rubro, para que no tengas que preocuparte y puedas disfrutar tu evento.
                    </p>
                </aside>
                <img src="/m-logo.png" id='logoNosotros' alt="" />
            </div>
            <article id='porQueMemoryPicsContainer'>
                <img src="/por-que-memory-pic.png" id='porQueMemoryPicFoto' alt="" />
                <aside>
                    <h2 className="sectionTitle">¿Por qué Memory Pic?</h2>
                    <p className="sectionText">Porque las fotos persisten en nuestra memoria más allá del tiempo. Porque las imágenes se guardan con cuidado como un recuerdo preciado. Memory Pic son esas fotos de un evento especial, una boda, un cumpleaños, un festejo, una persona. En síntesis... Un momento.<br/><br/>
                        Buscamos conseguir que cada uno se pueda llevar un recuerdo lindo de su paso por nuestras cabinas y de tu evento.
                    </p>
                </aside>
            </article>
            <div id='contactanosBanner'>
                <h2>Guarda en la memoria de todos, los mejores momentos de tu evento</h2>
                <Button
                    to='/contacto'
                    label='Contáctanos'
                    />
            </div>
            </main>
            <Footer
                photoCreator='lookstudio'
                photoLink='https://www.freepik.es/foto-gratis/chica-guapa-morena-copa-vino-bailando-sobre-fondo-negro-elegante-modelo-femenino-disfrutando-fiesta-cumpleanos_23590921.htm#page=3&query=fiesta&position=4&from_view=search&track=aitestb'
                creatorLink='https://mail.google.com/mail/?view=cm&fs=1&to=gonza.mauricioivan@gmail.com&su=Nueva%20Consulta&body=Hola,%20Queria%20hacer%20una%20consulta:'
                />        
        </div>
    );
}
export default Nosotros;
