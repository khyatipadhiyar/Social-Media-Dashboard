
var btnmode=document.querySelector('#btn_mode');
var body_el=document.querySelector('body');
var social_el=document.querySelector('.headerMain_title');
var card_el=document.querySelectorAll('.card_main,.overviewcard_title');
var cardCounter_el=document.querySelectorAll('.card_mainCounter,.overviewcard_counter');
var ciecle_el=document.querySelector('.circle');
var button_bg=document.querySelector('.btns_mode');


btnmode.addEventListener('click',(event)=>{
	button_bg.classList.toggle("button_bgnormal");
	body_el.classList.toggle("body_white");
	social_el.classList.toggle("mode_color");
	ciecle_el.classList.toggle("mode_btn");

	card_el.forEach((e)=>{
	 	e.classList.toggle("modeCard_baground");});

	cardCounter_el.forEach((e)=>{
	 e.classList.toggle("mode_color");});
	 
});