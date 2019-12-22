import React from 'react';
import './Partneri.sass';
import fai from './fai400.gif';
import fame from './fame.png';
import fhs from './fhs.png';
import flkr from './flkr.png';
import ft from './ft.png';
import fmk from './fmk.png';
import kni from './kni.png';
import utb from './utb.png';
import su from './su2.png';
import kofola from './kofola.png';
import relax from './relax.png';
import zubr from './logo_zubr.jpg';
import kemp from './kemp.png';
import color from './color.png';
import usuh from './usuh.jpg';
import ctr from './ctr.jpg';
import rock from './rock.png';
import ACKO from './ACKO.jpg';

function Partneri() {
  return (
    <div className="Partneri">
        <h1 data-sal="fade-in"
            data-sal-duration="500"
            data-sal-easing="ease-out-bounce">Partneři</h1>
        <a href="https://www.utb.cz/" target="_blank"><img src={utb} className="zone utb" alt="utb" /></a>
        <div className="grid">
            <a href="https://fai.utb.cz/" target="_blank"><img src={fai} className="zone fai" alt="fai" /></a>
            <a href="https://fame.utb.cz/" target="_blank"><img src={fame} className="zone fame" alt="fame" /></a>
            <a href="https://fhs.utb.cz/" target="_blank"><img src={fhs} className="zone fhs" alt="fhs" /></a>
            <a href="https://flkr.utb.cz/" target="_blank"><img src={flkr} className="zone flkr" alt="flkr" /></a>
            <a href="https://ft.utb.cz/" target="_blank"><img src={ft} className="zone ft" alt="ft" /></a>
            <a href="https://fmk.utb.cz/" target="_blank"><img src={fmk} className="zone fmk" alt="fmk" /></a>
        </div>
        <a href="https://su.utb.cz/" target="_blank"><img src={su} className="zone su" alt="su" /></a>
        <div className="grid3">
            <a href="https://www.kofola.cz/" target="_blank"><img src={kofola} className="zone kofola" alt="kofola" /></a>
            <a href="http://www.relax.cz/" target="_blank"><img src={relax} className="zone relax" alt="relax" /></a>
            <a href="http://www.zubr.cz/" target="_blank"><img src={zubr} className="zone zubr" alt="zubr" /></a>
            <a href="http://colorpoint.cz/" target="_blank"><img src={color} className="zone color" alt="color" /></a>
            <a href="http://colorpoint.cz/" target="_blank"><img src={ctr} className="zone ctr" alt="ctr" /></a>
            <a href="http://rockstarenergy.com/" target="_blank"><img src={rock} className="zone rock" alt="rock" /></a>
            <a href="https://www.bambule.cz/nafukovaci-jednorozec-maxi?fbclid=IwAR2jjv3w6b1XaQhhN4Fghqzw9WNTN9yYVSI3KKT3HeJvlQKVMjyublk8B_g" target="_blank"><img src={ACKO} className="zone ACKO" alt="ACKO" /></a>
        </div>
        <div className="grid2">
            <a href="http://www.usuh.cz/" target="_blank"><img src={usuh} className="zone usuh" alt="usuh" /></a>
            <a href="http://kemp-bystricka.cz/" target="_blank"><img src={kemp} className="zone kemp" alt="kemp" /></a>
        </div>

    </div>
  );
}

export default Partneri;
