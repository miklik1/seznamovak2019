import React from 'react';
import './Poznej.sass';
import ohen from './ohen.png';
import delic2 from './delic2.png';

function Poznej() {
  return (
    <div className="Poznej">
    	<div className="cedule">
    		<h2>VKROČ DO UNIVERZITNÍHO SVĚTA SPRÁVNOU NOHOU</h2>
    		<div className="flex">
    			<img src={ohen} alt="" className="ohen"/>
    			<div className="text">
		    		<p>Jedinečná akce, která propojuje studenty všech fakult Univerzity Tomáše Bati! Staň se i ty právoplatným členem UTBčka. 
		    		Přijedeš, poznáš hromadu nových kámošů, vykoupeš se v přehradě nebo večer posedíš u táboráku. A to vše v prostředí nádherných 
		    		Vsetínských vrchů na Valašsku. </p>
		    		<p>Kromě nekonečné zábavy a nabitého programu, který pro tebe vymysleli instruktoři ze Studentské unie UTB a Unie studentů v 
		    		Uherském Hradišti, se taktéž dozvíš mnoho užitečných informací přímo od nás - studentů, aby ses první dny ve Zlíně neztratil.</p>
		    		<p>Tak neváhej a podej si přihlášku, protože VŠECHNY CESTY PRVÁKA VEDOU NA SEZNAMOVÁK! </p>
	    		</div>
    		</div>
    	</div>
    </div>
  );
}

export default Poznej;
