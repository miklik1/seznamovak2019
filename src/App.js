import React from 'react';
import Navbar1 from './Navbar';
import ParallaxSec from './ParallaxSec';
import Prihlaska from './Prihlaska';
import Poznej from './Poznej';
import Aftermovie from './Aftermovie';
import Informace from './Informace';
import Mapa from './Mapa';
import Instruktori from './Instruktori';
import Program from './Program';
import Partneri from './Partneri';
import PrihlaskaBottom from './PrihlaskaBottom';
import Kontakt from './Kontakt';
import Footer from './Footer';
import './App.sass';

function App() {
  return (
      <div className="App">
        <Navbar1 />
        <ParallaxSec/>
        <Prihlaska id="prihlaska"  />
        <Poznej />
        <Aftermovie />
        <Informace />
        <Mapa />
        <Instruktori />
        <Program />
        <Partneri />
        <PrihlaskaBottom />
        <Kontakt />
        <Footer />
      </div>
  );
}

export default App;
