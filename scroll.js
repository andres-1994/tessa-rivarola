/*button up*/

document.getElementById("boton").addEventListener("click", scrollUp);

function scrollUp(){

	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0 ) { 

		window.requestAnimationFrame(scrollUp);

		window.scrollTo(0, currentScroll - (currentScroll / 10));

	}
}


buttonUp = document.getElementById("boton");

window.onscroll = function(){

	var scroll = document.documentElement.scrollTop;

	if(scroll > 1000){

		buttonUp.style.transform = "scale(1)";

	}else if(scroll < 1000){

		buttonUp.style.transform = "scale(0)";
	}
}