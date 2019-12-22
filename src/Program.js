import React from 'react';
import './Program.sass';


function Program() {
  return (
    <div className="Program">
    	<h1 data-sal="zoom-in"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce">PROGRAM</h1>
    	<div className="container1">
    		<div data-sal="slide-right"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section1">
    			<div>
    				<h2 className="nadpis">Informace o univerzitě a Zlínu</h2>

    			</div>
    			<div>
    				<h2 className="nadpis">Příroda zlínského kraje</h2>
    			</div>
                <div>
                    <h2 className="nadpis">Táborák s kytarou</h2>
                </div>
                <div>
                    <h2 className="nadpis">Crossfit workout</h2>
                </div>
                <div>
                    <h2 className="nadpis">Rady od starších studentů</h2>

                </div>
                <div>
                    <h2 className="nadpis">Letní kino</h2>
                </div>

    		</div>
    		<div data-sal="slide-left"
  			data-sal-duration="500"
  			data-sal-easing="ease-out-bounce" className="section2">
    		    <div>
    				<h2 className="nadpis">Koupání v přehradě</h2>
    			</div>
    		    <div>
    				<h2 className="nadpis">Seznamovací hry</h2>
    			</div>
    			<div>
    				<h2 className="nadpis">Sportovní program</h2>
    			</div>
                <div>
                    <h2 className="nadpis">Závěrečná párty</h2>
                </div>
                <div>
                    <h2 className="nadpis">Grilovačka</h2>
                </div>
                <div>
                    <h2 className="nadpis">Klub vojenské historie a současnosti</h2>
                </div>
    		</div>
    	</div>
    </div>
  );
}

export default Program;
