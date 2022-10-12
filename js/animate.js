

//---get alement for animate
const skill_text = document.getElementById("skill_text");
const skill_type = document.getElementsByClassName("skill_type");

const project_text = document.getElementById("project_text");
const project_item = document.getElementById("project_item");

const contact_left = document.getElementById("contact_left");
const contact_right = document.getElementById("contact_right");



document.addEventListener("scroll", function(){
	if(window.scrollY > height_size - 10){
		//---call animate skillpage
		skill_animate_1();
		setTimeout(skill_animate_2, 200);
		setTimeout(skill_animate_3, 500);
	}
	if(scrolly > height_size * 2 - 10){
		//---call animate projectpage
		project_animate_1();
		setTimeout(project_animate_2, 200);
	}
	if(scrolly > height_size * 3 - 10){
		//---call animate contactpage
		contact_animate_1();
		setTimeout(contact_animate_2, 200);
	}
});

//---function animate skill page
function skill_animate_1(){
	skill_text.style.opacity = "100%";
	skill_text.style.transform = "translateY(30px)";
}
function skill_animate_2(){
	skill_type[0].style.opacity = "100%";
	skill_type[0].style.transform = "translateY(30px)";
}
function skill_animate_3(){
	skill_type[1].style.opacity = "100%";
	skill_type[1].style.transform = "translateY(30px)";
}

//---function animate project page
function project_animate_1(){
	project_text.style.opacity = "100%";
	project_text.style.transform = "translateY(30px)";
}
function project_animate_2(){
	project_item.style.opacity = "100%";
	project_item.style.transform = "translateY(30px)";
}

//---function animate contact page
function contact_animate_1(){
	contact_left.style.opacity = "100%";
	contact_left.style.transform = "translateY(30px)";
}
function contact_animate_2(){
	contact_right.style.opacity = "100%";
	contact_right.style.transform = "translateY(30px)";
}