import React from 'react';
import './Parallax.sass';
import logo from './logo.png';

function ParallaxSec() {
	
	window.addEventListener('scroll', () => {
	let pixels = window.pageYOffset;
   let parent = document.getElementsByClassName('ParallaxSec')[0];
   let children = parent.getElementsByClassName('up');
   for(let i = 0; i < children.length; i++) {
     children[i].style.transform = 'translateY(' + (pixels * i * 1.2 / children.length) + 'px)';
   }
   // logo.style.transform = "transoform", 'translate(0px,' + scrollValue / 2 + '%)');
}, false)

// 	window.addEventListener('scroll', () => {
// 	let pixels = window.pageYOffset;
// 	let parent = document.getElementsByClassName('ParallaxSec')[0];
//    let logo = parent.getElementsByClassName('down');
//    logo.style.top = - (pixels * 0.2) + 'px';
//    // logo.style.transform = "transoform", 'translate(0px,' + scrollValue / 2 + '%)');
// }, false)

  return (
    <div className="ParallaxSec">
      <div className="lay1 up" alt=""/>
      <div className="lay2 up" alt=""/>
      <div className="lay3 up" alt=""/>
      <div className="lay5 up" alt=""/>
      <div className="lay6 up" alt=""/>
      <div className="lay7 up" alt=""/>
      <img className="up" src={logo} alt="logo"/>
    </div>
  );
}

export default ParallaxSec;
