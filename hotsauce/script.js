
let menu = document.getElementById("top-menu");
let ham = document.getElementById("ham");
let menuAction = document.getElementById("menu-action");

ham.addEventListener("click", function(){
	ham.classList.toggle("close");
	menu.classList.toggle("menu-open");
	menuAction.classList.toggle("menu-action-open");
});


/* Inchide meniul cand se da click oriunde in document */
/* document.addEventListener("click", function(event) {
	if (!menu.contains(event.target) && !ham.contains(event.target)) {
		menu.classList.remove("menu-open");
		ham.classList.remove("close");
	}
}); */

// Adaugăm un event listener și pe link-urile din meniu
// Inchide meniul cand se da click pe un link din nav
/* let menuLinks = document.querySelectorAll("#top-menu a");
menuLinks.forEach(function(link) {
	link.addEventListener("click", function() {
		menu.classList.remove("menu-open");
		ham.classList.remove("close");
	});
}); */