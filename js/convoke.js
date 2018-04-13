var aboutButton = document.querySelector("#ab");
var scheduleButton = document.querySelector("#sc");
var sponsorButton = document.querySelector("#sp");
var faqButton = document.querySelector("#fa");
var contactButton = document.querySelector("#co");

aboutButton.addEventListener("click",function(){
	this.classList.add("selected");
	scheduleButton.classList.remove("selected");
	sponsorButton.classList.remove("selected");
	faqButton.classList.remove("selected");
	contactButton.classList.remove("selected");
});

scheduleButton.addEventListener("click",function(){
	this.classList.add("selected");
	aboutButton.classList.remove("selected");
	sponsorButton.classList.remove("selected");
	faqButton.classList.remove("selected");
		contactButton.classList.remove("selected");
});

sponsorButton.addEventListener("click",function(){
	this.classList.add("selected");
	aboutButton.classList.remove("selected");
	scheduleButton.classList.remove("selected");
	faqButton.classList.remove("selected");
		contactButton.classList.remove("selected");
});

faqButton.addEventListener("click",function(){
	this.classList.add("selected");
	aboutButton.classList.remove("selected");
	scheduleButton.classList.remove("selected");
	sponsorButton.classList.remove("selected");
		contactButton.classList.remove("selected");
});

contactButton.addEventListener("click",function(){
	this.classList.add("selected");
	aboutButton.classList.remove("selected");
	scheduleButton.classList.remove("selected");
	faqButton.classList.remove("selected");
	sponsorButtonButton.classList.remove("selected");
});
