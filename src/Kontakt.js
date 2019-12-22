import React from 'react';
import ochrana from './Ochrana_osobních_údaju_SU_Seznamovák_UTB.pdf';
import souhlas from './Souhlas_se_zpracováním_osobních_údajů_Seznamovák_UTB.pdf';
import podminky from './Účastnické_podmínky_SU_Seznamovák_UTB.pdf';
import fb from './fb2.svg';
import ig from './ig.svg';
import './Kontakt.sass';


function Kontakt() {
  return (
    <div className="Kontakt">
    	<h1 data-sal="zoom-in"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce">KONTAKT</h1>
    	<div className="container1">
    		<div data-sal="slide-right"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section1">
    			<div>
    				<h2 className="nadpis">Jsme tu pro tebe</h2>
                    <p>Pokud potřebuješ s něčím pomoci, neváhej nás kontaktovat:</p>
    			</div>
    			<div>
    				<h2 className="nadpis">Facebook</h2>
                    <p>Sleduj Seznamovák Univerzity Tomáše Bati na Facebooku <a href="https://www.facebook.com/studentskaunieutb/" target="_blank">Studentské unie UTB</a></p>
                    <p>Preferujeme komunikaci přes <a href="https://www.messenger.com/t/studentskaunieutb" target="_blank">Facebook Messenger</a>. Je to nejrychlejší a nejpohodlnější.</p>
    			</div>
                <div>
                    <h2 className="nadpis">E-mail</h2>
                    <a href="mailto:seznamovak@sutb.cz"><p>seznamovak@sutb.cz</p></a>
                </div>
    		</div>
    		<div data-sal="slide-left"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section2">
    		    <div>
    				<h2 className="nadpis">Pořadatel</h2>
                    <p>Studentská unie UTB, z.s</p>
                    <p>Nad Ovčírnou 3685, budova U11 UTB, 760 01 Zlín</p>
                    <a href="https://www.su.utb.cz" target="_blank"><p>www.su.utb.cz</p></a>
    			</div>
    		    <div>
    				<h2 className="nadpis">Dokumenty</h2>
                    <a href= {ochrana} target="_blank"><p>Ochrana osobních údaju Seznamovák UTB (PDF soubor)</p></a>
                    <a href= {souhlas} target="_blank"><p>Souhlas se zpracováním osobních údajů Seznamovák UTB (PDF soubor)</p></a>
                    <a href= {podminky} target="_blank"><p>Účastnické podmínky Seznamovák UTB (PDF soubor)</p></a>
    			</div>
    		</div>
    	</div>
        <div data-sal="fade-in"
            data-sal-duration="500"
            data-sal-easing="ease-out-bounce">
        <h2 className="nadpis1">Manažeři projektu</h2>
        <div className="manazeri">
            <div>
                <p><strong>Dominik Gerža</strong><br />
                +420 605 803 354</p>
                <a href="https://www.facebook.com/dodislav?ref=br_rs" target="_blank"><img src={fb} alt=""/></a>
                <a href="https://www.instagram.com/dodislav/" target="_blank"><img src={ig} alt=""  /></a>
            </div>
            <div>
                <p><strong>Albert Kašpar</strong>
                <br />+420 734 618 734</p>
                <a href="https://www.facebook.com/bertkaspar98" target="_blank"><img src={fb} alt=""/></a>
                <a href="https://www.instagram.com/bert_kaspar/" target="_blank"><img src={ig} alt=""/></a>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Kontakt;