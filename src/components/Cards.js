import React from 'react';
import PropTypes from 'prop-types';
import "./SliderValojs.css"
const Cards = ({ cards }) => {
  return (
    <div className='cards-container'>
      {cards.map(card => (
        <div key={card.id} className="carta">
          <h2 className='cardTitle'>{card.title}</h2>
          <p className='cardDesc'>{card.desc}</p>
          <p className='cardDesc'>{card.fecha}</p>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;



// crea un slider dond el nombre del componente sea SliderValo y su funcion principal sea pasar cartas de valoracioensd de clientes de forma automatica,  por eso requiero que armes el componente cards reciviendoe ste array con la informacion;  [
//   {
//     id: "1",
//     title:"Carta1",
//     desc: "Desc1",
//     Subtitle:"Subtitle1"
//   },
//   {
//     id: "2",
//     title:"Carta2",
//     desc: "Desc2",
//     Subtitle:"Subtitle2"
//   },
//   {
//     id: "3",
//     title:"Carta3",
//     desc: "Desc3",
//     Subtitle:"Subtitle3"
//   },
// ] 

// la informacion que mandes por props de un componente a otro deven etener los valores definidos con propTypes
