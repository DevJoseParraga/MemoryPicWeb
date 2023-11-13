import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDopwnsServicios.css'; // Asegúrate de tener el archivo CSS con los estilos correspondientes

const DropDopwnsServicios = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-btn" onClick={handleToggle}>
       SERVICIOS
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className='dropDLi'>
            <Link className='dropDLink' to='/cabinaDeFotos' onClick={handleItemClick}>
              Cabina De fotos
            </Link>
          </li>
          <li className='dropDLi'>
            <Link className='dropDLink' to='/plataforma360' onClick={handleItemClick}>
            Plataforma360°
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDopwnsServicios;

