import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards'; // Asegúrate de importar el componente Cards desde la ruta correcta
import "./SliderValojs.css"

const SliderValo = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextCards = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < cards.length ? prevIndex + 3 : 0
    );
  };

  const showPrevCards = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : cards.length - 3
    );
  };
  
  // Determina las tarjetas a mostrar en el slider
  const visibleCards = cards.slice(currentIndex, currentIndex + 3);
  useEffect(() => {
    // Avance automático del slider cada 3 segundos
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 < cards.length ? prevIndex + 3 : 0
      );
    }, 3000);

    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(intervalId);
    };
  }, [currentIndex, cards]);

  
  return (
        <div className="slider-container">
            <div className="slider-btn prev" onClick={showPrevCards} >
              <img className='prevArrow' src="./arrow-left_8286963.png" alt="imagen flecha" />
            </div>
          <div className="slider">
            <Cards cards={cards.slice(currentIndex, currentIndex + 3)} />
          </div>
            <div className="slider-btn next" onClick={showNextCards}>
            <img className='nextArrow'src="./arrow-right_8286965 (1).png" alt="imagen flecha" />
            </div >
          {/* <p>Mostrando la valoración actual: {currentIndex + 1}</p> */}
        </div>
      );
    };
    SliderValo.propTypes = {
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired,
          fecha: PropTypes.string.isRequired,
        })
      ).isRequired,
    };
    
export default SliderValo;
