"use strict";

/* Настройка Яндекс API */
var voice = function (text) {
	var url = "https://tts.voicetech.yandex.net/generate?"+ 
	"key=35614106-41f0-40c2-9160-7ac384125935" +
	"&text=" + text +
	"&format=wav" +
	"&lang=en-US" +
	"&emotion=neutral" +
	"&speed=0.9" +
	"&speaker=jane";

	audio.src = url;
	audio.load();
	audio.onloadeddata = function (argument) {
		audio.play();
	}
}

function addEat(argument) {
	var box = document.querySelectorAll(".box");

	for (var i = 0; i < box.length; i++) {
		box[i].onclick = function () {
			this.classList.add("ready");
			mircroOven.food = this.id;
		}
	}
} addEat();


/* Функция конструктор */
function mircroOven() {
	this.time = 0;
	this.food;
	this.text;

	var that = this;

	function onReady() {

		if (!that.food == "undefined") {
			oven.classList = "done";
		}

		oven.classList = that.food;
		var text = that.food[0].toUpperCase() + that.food.slice(1,) + " " + that.text;
		voice(text);
	} 


	this.run = function() {
		setTimeout(onReady, this.time*1000);
	};	
}

var mircroOven = new mircroOven();
	mircroOven.time = 2;
	mircroOven.text = "ready!";

start.onclick = function (argument) {
	oven.classList = "work";
	mircroOven.run();
}
