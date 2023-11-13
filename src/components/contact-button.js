import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

import { encodedWppMessage } from './constants';
import './contact-button.css'
const ContactButton = () => {

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
                to={`https://api.whatsapp.com/send?phone=5491154861232&text=${encodedWppMessage}`}
            >
                <img src="./wpp.png" alt="" />
                <span>¡Contactate!</span>
            </Link>
        </Fragment>
    );
}

export default ContactButton;