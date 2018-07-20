'use strict'

const search = document.querySelector('.header-search');
const input = document.querySelector('.header-search-input');
const form = document.querySelector('.header-form');
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

document.addEventListener( "click" , showSearchField);

//menu toogle
button.addEventListener('click', function(event) {
	menu.classList.toggle("menu-opened");
});

//show search field
function showSearchField(event) {
	if(event.target === search || event.target === form) {

		if(search.classList.contains('header-search-show')) {
			search.classList.remove('header-search-show');
		} else {
			search.classList.add('header-search-show');
		}

	} else if (event.target !== input) {
		search.classList.remove('header-search-show');
	}
}
