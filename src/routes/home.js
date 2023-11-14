import React, { Fragment, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/Button'
import ContactButton from '../components/contact-button';
import ReactGA from "react-ga4";
import {encodedWppMessage}  from "../components/constants.js"
import './home.css';

const Home = () => {
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <Fragment>
      <Header isHome={true} title={<span>Todo se guarda en la <span id='memoria'>memoria</span></span>} backgroundImage={'header-pic.jpg'} subtittle='Buscamos que nuestros clientes, se lleven un momento único e inolvidable.' />
      <ContactButton wpp={encodedWppMessage }/>
      <main id='homeMain'>
        <div id='conocenosBannerHome'>
          <h2>¿Por qué Memory Pic?</h2>
          <p>Por las fotos que persisten en nuestra memoria más allá del tiempo. Porque las imágenes se guardan con cuidado como un recuerdo preciado. Memory Pic son esas fotos de un evento especial, una boda, un cumpleaños, un festejo, una persona. </p>
          <Button label='Conocé Más' to='/nosotros' />
        </div>
        <section id='infoSectionHome'>
          <h2 className='homeTitle'>Nuestros Servicios</h2>
          <article id='servicios'>
            <aside>
              <h3 className='nuestrosServiciosTitle'>Fotos en HD Personalizadas</h3>
              <img id='polaroid' src="polaroid.png" alt="" />
              <p>¡Fotos en HD a color que se imprimen automáticamente. Podés personalizarlas y agregarles el mensaje que quieras!</p>
            </aside>
            <aside>
              <h3 className='nuestrosServiciosTitle'>Cabina Inflable Led de Fotos</h3>
              <img id='photoBooth' src="photo-boot.png" alt="" />
              <p>¡Cabina inflable led, para que te saques las mejores fotos! Ideal para interiores y exteriores. Pueden entrar hasta 6 personas.</p>
            </aside>
            <aside>
              <h3 className='nuestrosServiciosTitle'>El Cotillón Más Moderno</h3>
              <img id='antifazBlanco' src="antifaz-blanco.png" alt="" />
              <p>El cotillón más divertido para tu evento. Además, incluye una Copa del Mundo. ¡Sacáte las mejores fotos, con el trofeo de la Scaloneta!</p>
            </aside>
          </article>
          <div id='contactanosBannerHome'>
            <h2>¿Querés tener un evento único e inolvidable para todos?</h2>
            <p>¡Comunicate con nosotros y lo hacemos realidad!</p>
            <Button label='Contactanos' to='/contacto' />
          </div>
          <h2 className='homeTitle'>Te ofrecemos además</h2>
          <section id='serviciosExtra'>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
              <section>
                <img src="" alt="" />
                <h3>Fotos Ilimitadas</h3>
              </section>
              <p>Podés sacarte fotos ilimitadas, impresas en tamaño 10x15. Dentro de la hoja pueden entrar entre 1 y 3 fotos.</p>
            </div>
            </div>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
                <section>
                  <img src="" alt="" />
                  <h3>Fotos Digitales</h3>
                </section>
                <p>Vas a llevarte tus fotos digitalizadas para poder acceder a ellas donde sea y cuando quieras.</p>
              </div>
            </div>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
              <section>
                <img src="" alt="" />
                <h3>Foto Imanes</h3>
              </section>
              <p>¡Podés convertir tus fotos en imánes, para que los invitados se lleven un recuerdo exclusivo y original!</p>
            </div>
            </div>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
              <section>
                <img src="" alt="" />
                <h3>Traslado</h3>
              </section>
              <p>Nos encargamos del traslado de nuestras cabinas, cables, productos y otros suministros técnicos.</p>
            </div>
            </div>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
              <section>
                <img src="" alt="" />
                <h3>Luces LED</h3>
              </section>
              <p>¡Vas a tener Luces led a elección, para que puedas iluminar cada foto del color que mas te guste!</p>
            </div>
            </div>
            <div className='servicioExtraContainer'>
              <div className='alignmentBox'>
              <section>
                <img src="" alt="" />
                <h3>Operador</h3>
              </section>
              <p>Un colaborador de Memory Pic estará disponible durante todo el evento para asesorarte y ayudarte.</p>
            </div>
            </div>
          </section>
        </section>
      </main>
      <Footer
        photoCreator='rawpixel.com'
        photoLink='https://www.freepik.com/free-photo/people-enjoying-new-years-eve-party_2827634.htm#query=fiesta%20amigos&position=0&from_view=search&track=ais'
        creatorLink='https://mail.google.com/mail/?view=cm&fs=1&to=gonza.mauricioivan@gmail.com&su=Nueva%20Consulta&body=Hola,%20Queria%20hacer%20una%20consulta:'
      />
    </Fragment>
  )

}

export default Home;
