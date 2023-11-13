import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/home';
import Error from './routes/error';
import Contacto from './routes/contacto';
import Nosotros from './routes/nosotros';
import Cabina from './routes/Cabina';
import Plataforma from './routes/Plataforma';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

const App = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} errorElement={<Error />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cabinaDeFotos' element={<Cabina/>} />
            <Route path='/plataforma360' element={<Plataforma/>} />
        </Routes>
    );
}

export default App;