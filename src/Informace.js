import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './Informace.sass';
import wallet from './wallet.svg';
import calendar from './calendar.svg';
import bus from './bus.svg';
import camping from './camping-tent.svg';
import loupe from './loupe.svg';
import backpack from './backpack.svg';
import coctail from './cocktail.svg';
import arrow from './down-arrow.svg';

class Informace extends React.Component {
  render() {
  return (
    <div className="Informace">
    	<h1 data-sal="fade-in"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce">NEVÍŠ SI RADY?</h1>
    	<div className="container1">
    		<div data-sal="slide-right"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section1">
    			<div className="listItem">
    				<h2 className="nadpis" id="toggler">
                        <img src={bus} alt="" className="icon"/>
                            jak se tam dostanu?
                        <img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/>
                    </h2>
                    <UncontrolledCollapse toggler="#toggler">
    				<p>Vlastním autem nebo vlakem a autobusem na zastávku Bystřička, u Nováků. Sraz v 16:00 v kempu!</p>
    				<p>spojení na 1. turnus: <a href="https://jizdnirady.idnes.cz/vlakyautobusy/spojeni/?date=26.08.2019&time=14%3a00&f=Byst%c5%99i%c4%8dka%2c%2c%c5%beel.st.&t=Byst%c5%99i%c4%8dka%2c%2cu+Nov%c3%a1k%c5%af&fc=200003&tc=200003&submit=true" 
                                                target="_blank">idos</a></p>
    				<p>spojení na 2. turnus: <a href="https://jizdnirady.idnes.cz/vlakyautobusy/spojeni/?date=02.09.2019&time=14%3a00&f=Byst%c5%99i%c4%8dka%2c%2c%c5%beel.st.&t=Byst%c5%99i%c4%8dka%2c%2cu+Nov%c3%a1k%c5%af&fc=200003&tc=200003&submit=true" 
                                                target="_blank">idos</a></p>
    				<p>Pojedeš autem? Nabídni volná místa přes <a href="https://www.facebook.com/pg/studentskaunieutb/events/?ref=page_internal" target="_blank">facebook</a>.</p>
    			    </UncontrolledCollapse>
                </div>
    			<div className="listItem">
    				<h2 className="nadpis" id="toggler1">
                        <img src={wallet} alt="" className="icon"/>
                            kolik to stojí?
                        <img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/>
                    </h2>
                    <UncontrolledCollapse toggler="#toggler1">
        				<p><strong>1 999 Kč nebo 79 €</strong> - Baťa by byl hrdý!</p>
        				<p>Záloha 1000 Kč nebo 40 € po podání přihlášky.</p>
        				<p>Doplatek 999 Kč na místě v hotovosti – platba pouze v českých korunách.</p>
                    </UncontrolledCollapse>
    			</div>
                <div className="listItem">
                    <h2 className="nadpis" id="toggler5" ><img src={loupe} alt="" className="icon"/>kde to je?<img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/></h2>
                    <UncontrolledCollapse toggler="#toggler5">
                    <p>U krásné vodní nádrže Bystřička mezi Vsetínskými vrchy na Valašsku.</p>
                    <p>Kemp Ranč Bystřička, Bystřička 270, 756 24 Bystřička <a href="http://kemp-bystricka.cz/" target="_blank">(www)</a></p>
                    </UncontrolledCollapse>
                </div>
    		</div>
    		<div data-sal="slide-left"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section2">
    		    <div className="listItem">
    				<h2 className="nadpis" id="toggler2" ><img src={coctail} alt="" className="icon"/>co budu jíst?<img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/></h2>
    				<UncontrolledCollapse toggler="#toggler2">
                    <p>Plná penze plus večer něco navíc. U nás hlady rozhodně neumřeš. </p>
                    </UncontrolledCollapse>
    			</div>
    		    <div className="listItem">
    				<h2 className="nadpis" id="toggler3"><img src={backpack} alt="" className="icon"/>Co s sebou?<img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/></h2>
    				<UncontrolledCollapse toggler="#toggler3">
                    <p>Občanku, hotovost, plavky a oblečení jak sportovní, které můžeš zničit, tak taky teplé a nepromokavé vrstvy.</p>
    				<p>Určitě se bude hodit deka nebo spacák. Nakonec rozhodně přihoď dobrou náladu! </p>
                    </UncontrolledCollapse>
    			</div>
    			<div className="listItem">
    				<h2 className="nadpis" id="toggler4" ><img src={camping} alt="" className="icon"/>kde budu spát?<img src={arrow} alt="" className="arrow" style={{marginLeft: 'auto'}}/></h2>
    				<UncontrolledCollapse toggler="#toggler4">
                    <p>Dřevěné chatky s lednicí a povlečením v ceně.</p>
                    </UncontrolledCollapse>
    			</div>
    		</div>
    	</div>
    </div>
    );
  }
}

export default Informace;
