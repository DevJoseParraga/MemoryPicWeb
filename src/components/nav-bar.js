import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import { encodedWppMessage } from './constants';
import DropDopwnsServicios from './DropDopwnsServicios';
const NavBar = () =>
    <nav id="headerNav">
        <section id='logoSection'>
            <Link to={`/`}>
                <img id='logoNavbar' src="./logo.png" alt="" />
                <img id='logoNavbar2' src="./m-logo.png" alt="" />
            </Link>
        </section>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
        <span className='menu-button'></span>
        </label>
        <section id='menuSection'>
            <Link className='linkDropD' to={`/nosotros`}>NOSOTROS</Link>
            <Link  to={`/contacto`}>CONTACTO</Link>
            <DropDopwnsServicios></DropDopwnsServicios>
           
                <Link className='logoRss' target="_blank" rel="noopener noreferrer" to={`https://www.instagram.com/memorypic.fotos/`}>
                    <img className='imgRss' src="./ig.png" alt="instagram, ig" height={30} width={30}/>
                </Link>
                <Link className='logoRss' target="_blank" rel="noopener noreferrer" to={`https://www.facebook.com/profile.php?id=100089634712237`}>
                    <img  src="./fb.png" alt="facebook, fb" height={30} width={30} />
                </Link>
                <Link className='logoRss' target="_blank" rel="noopener noreferrer" to={`https://mail.google.com/mail/?view=cm&fs=1&to=memorypicfotos@gmail.com&su=Nueva%20Consulta&body=Hola,%20Queria%20hacer%20una%20consulta:`}>
                    <img  src="./mail.png" alt="mail, email, gmail" height={27} width={37} />

                </Link>
                <Link className='logoRss' target="_blank" rel="noopener noreferrer" to={`https://api.whatsapp.com/send?phone=5491154861232&text=${encodedWppMessage}`}>
                    <img  src="./wpp.png" alt="whatsapp, what's app" height={30} width={30} />

                    
                </Link>
           
        </section>
    </nav>;

export default NavBar;
