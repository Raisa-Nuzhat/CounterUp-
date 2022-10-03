// var mixitup = require('mixitup');
// mixItUp
var mixer = mixitup('.container');
// counterUp
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )
// darkmode
function addDarkmodeWidget() {
    new Darkmode({
        label: '🌓',
    }).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
//   vivus
new Vivus('mySignature', {duration: 200,type:'oneByOne'});