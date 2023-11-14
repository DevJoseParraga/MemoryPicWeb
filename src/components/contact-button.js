import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactGA from "react-ga4";
import './contact-button.css'
const ContactButton = ({wpp}) => {

    return (
        <Fragment>
            <Link
                onClick={() => {
                    console.log('enviado')
                    ReactGA.event({
                    category: "What's App",
                    action: "What's app Click",
                    label: "Click on what's app button", // optional
                    })
            }}
                id="wppContactButton"
                target="_blank"
                rel="noopener noreferrer"
                to={`https://api.whatsapp.com/send?phone=5491154861232&text=${wpp}`}
            >
                <img src="./wpp.png" alt="" />
                <span>¡Contactate!</span>
            </Link>
        </Fragment>
    );
}
ContactButton.propTypes = {
    wpp: PropTypes.string.isRequired, // Ajusta el tipo según lo que esperes para 'wpp'
    otherProp: PropTypes.any, // Ajusta según el tipo de otherProp
    // Agrega otras propiedades según sea necesario
  };
export default ContactButton;