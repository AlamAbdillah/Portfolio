var height_size = window.innerHeight;
var scrolly = window.scrollY;

//---get element nav
const nav = document.getElementById("nav");
const nav_item = document.getElementById("nav_item");
const logo = document.getElementById("logo");

//---get element page
const home_page = document.getElementById("homepage");
const skill_page = document.getElementById("skillpage");
const project_page = document.getElementById("projectpage");
const contact_page = document.getElementById("contactpage");

//---click nav
function homepage(){
	home_page.scrollIntoView(true);
}
function skillpage(){
	skill_page.scrollIntoView(true);
}
function projectpage(){
	project_page.scrollIntoView(true);
}
function contactpage(){
	contact_page.scrollIntoView(true);
}

document.addEventListener("scroll", function(){
	if(window.scrollY > height_size - 10){
		if(scrolly > window.scrollY){
			nav.style.top = "-70px";
		}else{
			nav.style.top = "0px";
		}
		scrolly = window.scrollY;

		//---style nav
		nav.style.position = "fixed";
		nav.style.background = "#fff";
		nav_item.style.opacity = "70%";
		nav_item.style.filter = "brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7500%) hue-rotate(328deg) brightness(89%) contrast(114%)";
		logo.style.filter = "brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7500%) hue-rotate(328deg) brightness(89%) contrast(114%)";
	}
	else{
		//---style nav
		nav.style.position = "initial";
		nav.style.background = "transparent";
		nav_item.style.opacity = "100%";
		nav_item.style.filter = "brightness(0) saturate(100%) invert(90%) sepia(76%) saturate(0%) hue-rotate(57deg) brightness(115%) contrast(100%)";
		logo.style.filter = "brightness(0) saturate(100%) invert(90%) sepia(76%) saturate(0%) hue-rotate(57deg) brightness(115%) contrast(100%)";
	}
});