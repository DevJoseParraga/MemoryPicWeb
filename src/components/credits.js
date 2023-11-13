import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom'
import './credits.css'

const Credits = ({ photoLink, creatorLink, photoCreator }) => 
<section id='credits'>
    <span>COPYRIGHT © 2023. CABINAS DE FOTOS MEMORY PICS | TODOS LOS DERECHOS RESERVADOS | <Link target="_blank" rel="noopener noreferrer" id='freepick' to={photoLink}>IMÁGEN DE {photoCreator.toUpperCase()} IN FREEPICK</Link> | CREADO POR <Link target="_blank" rel="noopener noreferrer" id='creator' to={creatorLink}>MAURICIO GONZALEZ</Link></span>
</section>


Credits.propTypes = {
    photoLink: string.isRequired,
    creatorLink: string.isRequired,
    photoCreator: string.isRequired
}
export default Credits;