import React from 'react';
import './Aftermovie.sass';
import delic3 from './delic3.png';

function Aftermovie() {
  return (
    <div className="Aftermovie">
    	<p className="after" 
    		data-sal="zoom-in"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce">TEASER 2019</p>
      <iframe src="https://www.youtube.com/embed/U15G5bZF1sk"
       frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
       allowFullscreen title="teaser"></iframe>
    </div>
  );
}

export default Aftermovie;
