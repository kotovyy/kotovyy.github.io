'use strict'

const search = document.querySelector('.header-search');
const input = document.querySelector('.header-search-input');
const form = document.querySelector('.header-form');

search.addEventListener( "click" , showSearchField);
search.addEventListener( "blur" , showSearchField);

function showSearchField(event) {
	if(event.target === input) {
		return;
	}
	search.classList.toggle('header-search-show');
}
