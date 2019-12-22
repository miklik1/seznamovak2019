import React from 'react';
import './Mapa.sass';

function Mapa() {
  return (
    <div className="Mapa">
    	<div className="vrstva">
    		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10382.043941896833!2d18.0171964!3d49.4181528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ab876252d17b823!2zS2VtcCBSYW7EjSBCeXN0xZlpxI1rYQ!5e0!3m2!1scs!2scz!4v1562612375112!5m2!1scs!2scz" 
 frameBorder="0"  allowFullScreen title="mapa"></iframe>
    	</div>	
    </div>
  );
}

export default Mapa;
