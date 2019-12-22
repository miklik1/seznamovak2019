import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Instruktori.sass';
import dodo from './img/dodo.jpg';
import vojta from './img/vojta.jpg';
import albert from './img/bert.jpg';
import marek from './img/mara.jpg';
import ondra from './img/ondra.jpg';
import artur from './img/archie.jpg';
import alice from './img/alicka.jpg';
import adam from './img/svoza.jpg';
import alena from './img/alca.jpg';
import nikol from './img/nikol.jpg';
import martin from './img/martin.jpg';
import jan from './img/bury.jpg';
import zbyna from './img/zbyna.jpg';
import david from './img/dejw.jpg';
import renata from './img/renca.jpg';
import filip from './img/filip.jpg';
import natalie from './img/natalka.jpg';
import michaela from './img/misa.jpg';
import miska from './img/miska.jpg';
import lucka from './img/lucka.jpg';
import jeza from './img/jeza.jpg';
import pavlina from './img/pavlina.jpg';
import vitek from './img/vitek.jpg';
import superman from './img/superman.jpg';

class Instruktori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
    <div className="Instruktori">
        <h1 data-sal="fade-in"
            data-sal-duration="500"
            data-sal-easing="ease-out-bounce"> Instruktoři </h1>
        <div className="grid-container">
        <article class="location-listing">
            <a class="location-title">Dodo</a>
            <div class="location-image">
                <img src={dodo} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Bert</a>
            <div class="location-image">
                <img src={albert} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">vojta</a>
            <div class="location-image">
                <img src={vojta} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Natálka</a>
            <div class="location-image">
                <img src={natalie} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Míša</a>
            <div class="location-image">
                <img src={michaela} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Ondra</a>
            <div class="location-image">
                <img src={ondra} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Mára</a>
            <div class="location-image">
                <img src={marek} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Dejw</a>
            <div class="location-image">
                <img src={david} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Ježa</a>
            <div class="location-image">
                <img src={jeza} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Alča</a>
            <div class="location-image">
                <img src={alena} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Svoza</a>
            <div class="location-image">
                <img src={adam} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Lucka</a>
            <div class="location-image">
                <img src={lucka} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Zbyňa</a>
            <div class="location-image">
                <img src={zbyna} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">nikolita</a>
            <div class="location-image">
                <img src={nikol} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Vítek</a>
            <div class="location-image">
                <img src={vitek} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">Alička</a>
            <div class="location-image">
                <img src={alice} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">archie</a>
            <div class="location-image">
                <img src={artur} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">bury</a>
            <div class="location-image">
                <img src={jan} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">filip</a>
            <div class="location-image">
                <img src={filip} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">renča</a>
            <div class="location-image">
                <img src={renata} alt=""/>
            </div>
        </article><article class="location-listing">
            <a class="location-title">Pavlína</a>
            <div class="location-image">
                <img src={pavlina} alt=""/>
            </div>
        </article>
        <article class="location-listing">
            <a class="location-title">SUperman</a>
            <div class="location-image">
                <img src={superman} alt=""/>
            </div>
        </article>
        </div>
    </div>
    );
  }
}

export default Instruktori;
