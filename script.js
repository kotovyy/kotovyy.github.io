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

//choose section in footer menu

const selectSection = document.querySelector('.js-footer-menu-mobile');
const sectionList = document.querySelector('.js-footer-menu-list-mobile');
let sectionItems = document.querySelectorAll('.js-select-item');
const selectedSectionName = document.querySelector('.js-selected-name');
const sectionMenu = document.querySelectorAll('.footer-menu-list');

selectSection.addEventListener('click', toggleSection.bind(this));

function toggleSection(event) {
	sectionList.classList.toggle("footer-menu-list-mobile-hidden");
}

sectionItems = Array.prototype.slice.call(sectionItems, 0);

sectionItems.forEach(function(item) {
	item.addEventListener('click', selectSectionHandler.bind(this));
});

function selectSectionHandler(event) {
	changeSection(event.target.dataset.section, event.target.innerHTML);
}

function changeSection(sectionValue, sectionName)
{
	sectionName = sectionName || '';
	if (sectionName !== '') {
		selectedSectionName.innerHTML = sectionName;
	}

	for (let i = 0; i < sectionMenu.length; i++) {
		if (sectionMenu[i].dataset.section === sectionValue) {
			sectionMenu[i].style.display = "block";
		}
		else {
			sectionMenu[i].style.display = "none";
		}
	}
}

// mobile submenu
const sidebarList = document.querySelector('.sidebar-menu-list');
const sidebarSelectedItem = document.querySelector('.sidebar-menu-item-selected');

sidebarSelectedItem.addEventListener('click', toggleSidebarMenu.bind(this));

function toggleSidebarMenu(event) {
	sidebarList.classList.toggle("sidebar-menu-list-show");	
}

// slider for news

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
 
      items : 1,
      nav: true,
      dots: true,
      dotsEach: true,
      navText: false,
      pagination: false
  });

});

// main slider

$(document).ready(function(){
  $(".owl-carousel-main").owlCarousel({
 
      items : 1,
      nav: true,
      dots: true,
      dotsEach: true,
      navText: false,
      pagination: false
  });

});
