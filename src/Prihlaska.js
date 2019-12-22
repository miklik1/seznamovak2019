import React from 'react';
import './Prihlaska.sass';
import layer1 from './delic1.png';
import mapa from './map.svg';


function Prihlaska() {
  return (
    <div className="Prihlaska">
    	<p data-sal="zoom-in"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce"
  			 className="buttonPrihlaska">Přihlaš se</p>
         <p data-sal="zoom-in"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce" className="klik">kliknutím na turnus</p>
      <div className="flex">
        <div className="margin"><a href="https://docs.google.com/forms/d/e/1FAIpQLScIyDvyrFCjUEwIcNESBtJ3NATUIv8ArqzAYWaE99yhlthuVg/viewform?entry.826026341=26.+%E2%80%93+29.+8.+2019+I+Po+%E2%80%93+%C4%8Ct&fbclid=IwAR0OK7zhhhBREkVI761tn7T7Q86wUXF-dXMTRby4AQRKcUvfUDHgS-OcIRY" 
        target="_blank"><p className="turnus order1">1.Turnus<br />26.—29. 8. 2019</p></a><p className="mista">Přihlásit se jako náhradník</p></div>
        <div><a href="https://docs.google.com/forms/d/e/1FAIpQLScIyDvyrFCjUEwIcNESBtJ3NATUIv8ArqzAYWaE99yhlthuVg/viewform?entry.826026341=26.+%E2%80%93+29.+8.+2019+I+Po+%E2%80%93+%C4%8Ct&fbclid=IwAR0OK7zhhhBREkVI761tn7T7Q86wUXF-dXMTRby4AQRKcUvfUDHgS-OcIRY" 
          target="_blank">
        <p className="turnus order3">2.Turnus<br />2.—5. 9. 2019</p></a><p className="mista">Přihlásit se jako náhradník</p></div>
      </div>
  	 
  	 <p className="cena">Cena 1999 Kč // 79 € </p>
	    <img src={layer1} alt="" className="delic1"/>
    </div>
  );
}

export default Prihlaska;
