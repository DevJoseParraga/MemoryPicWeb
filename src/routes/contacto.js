import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contact-form';
import ContactButton from '../components/contact-button';
import ReactGA from "react-ga4";

import './contacto.css';

const Contacto = () => {

  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  const [renderForm, setRenderForm] = useState(true);
  return (
    <Fragment>
      <Header isHome={false} title={'¡Contactate!'} backgroundImage={'header-pic.jpg'} />
      <ContactButton/>
      <main id='contactoContainer'>
        {renderForm ? 
          <Fragment>
            <h2 id='contactoTitle'>¡Dejanos tu consulta y nos comunicaremos a la brevedad!</h2>
            <ContactForm renderForm={renderForm} setRenderForm={setRenderForm}/>
          </Fragment>:
          <div id='formSentMessageContainer'>
            <h2 className='formSentMessage'>
              El formulario ha sido enviado. Nos comunicaremos con usted a la brevedad.
            </h2>
            <h2 className='formSentMessage' style={{ marginTop: 0}}>
            ¡Muchas gracias!
            </h2>
          </div>
          
        }
            <div id='contactBanner'>
              <h2>Te ayudamos a crear los mejores recuerdos</h2>
            </div>
      </main>
      <Footer
        photoCreator='halayalex'
        photoLink='https://www.freepik.es/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-moda-casual-vestidos-verano-sexy-mujer-despreocupada-posando_6601779.htm#page=3&query=amigos%20fiesta&position=39&from_view=search&track=aitestb'
        creatorLink=''
      />
    </Fragment>
  )

}

export default Contacto;
