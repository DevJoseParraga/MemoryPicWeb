import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'
import Credits from './credits';
import { string } from 'prop-types';
import { encodedWppMessage } from './constants';

const Footer = ({ photoLink, creatorLink, photoCreator }) =>
    <footer>
        <section id='footerInfo'>
            <Link id='bigLogoFooterLink' to={`/`}>
                <img id="logoFooter" src="./logo-blanco-azul.png" alt="" />
            </Link>
            <Link id='smallLogoFooterLink'to={`/`}>
                <img id="logoFooter2" src="./m-logo.png" alt="" />
            </Link>
            <section id='footerNavBar'>
                <section id='footerMenu'>
                    <h3 translate='no' >Menú</h3>
                    <Link to={`/`}>
                        <h4 translate='no'>
                            Home
                        </h4>
                    </Link>
                    <Link to={`/nosotros`}>
                        <h4>Nosotros</h4>
                    </Link>
                    <Link to={`/contacto`}>
                        <h4>Contacto</h4>
                    </Link>
                </section>
                <section id='footerContacto'>
                    <h3>Contacto</h3>
                    <span>
                        <img 
                        id='fbFooter'
                        src="./fb-azul.png" alt="" />
                        <Link target="_blank" rel="noopener noreferrer" to={`https://www.facebook.com/profile.php?id=100089634712237`}>
                            <h4 translate='no'>Memory Pic</h4>
                        </Link>
                    </span>
                    <span>
                        <img id='igFooter' src="./ig-azul.png" alt="" />
                        <Link target="_blank" rel="noopener noreferrer" to={`https://www.instagram.com/memorypic.fotos/`}>
                            <h4 translate='no' >Memorypic.fotos</h4>
                        </Link>
                    </span>
                    <span>
                        <img id='wppFooter' src="./wpp-azul.png" alt="" />
                        <Link target="_blank" rel="noopener noreferrer" to={`https://api.whatsapp.com/send?phone=5491154861232&text=${encodedWppMessage}`}>
                            <h4>+549 1154861232</h4>
                        </Link>
                    </span>
                    <span>
                        <img id='mailFooter' src="./mail-azul.png" alt="" />
                        <Link target="_blank" rel="noopener noreferrer" to={`https://mail.google.com/mail/?view=cm&fs=1&to=memorypicfotos@gmail.com&su=Nueva%20Consulta&body=Hola,%20Queria%20hacer%20una%20consulta:`}>
                            <h4 translate='no' >memorypicfotos@gmail.com</h4>
                        </Link>
                    </span>
                </section>
            </section>
        </section>
        <Credits photoLink={photoLink} creatorLink={creatorLink} photoCreator={photoCreator} />
    </footer>

Footer.propTypes = {
    photoLink: string.isRequired,
    creatorLink: string.isRequired,
    photoCreator: string.isRequired
}

export default Footer;
