

	let ballHit = document.getElementById("ballHit");
	let brickBreak = document.getElementById("brickBreak");
	let game_over_sound = document.getElementById("game_over_sound");
	let level_up_sound = document.getElementById("level_up_sound");
	let loseHeart = document.getElementById("loseHeart");
	let powerUp = document.getElementById("powerUp");
	let pushButton = document.getElementById("pushButton");
	let pushButton2 = document.getElementById("pushButton2");
	let winState = document.getElementById("winState");

	let bgm1 = document.getElementById("bgm1");
	let bgm2 = document.getElementById("bgm2");
	let bgm3 = document.getElementById("bgm3");
	let bgm4 = document.getElementById("bgm4");
	let bgm5 = document.getElementById("bgm5");
	let bgm6 = document.getElementById("bgm6");

	let music_slider = document.getElementById("music_range");
	music_slider.value = JSON.parse(window.localStorage.getItem('musicVolume'));
	bgm1.volume = music_slider.value/100;
	bgm2.volume = music_slider.value/100;
	bgm3.volume = music_slider.value/100;
	bgm4.volume = music_slider.value/100;
	bgm5.volume = music_slider.value/100;
	bgm6.volume = music_slider.value/100;

	let sound_slider = document.getElementById("sound_range");
	sound_slider.value = JSON.parse(window.localStorage.getItem('soundVolume'));
	ballHit.volume = sound_slider.value/100;
	brickBreak.volume = sound_slider.value/100;
	game_over_sound.volume = sound_slider.value/100;
	level_up_sound.volume = sound_slider.value/100;
	loseHeart.volume = sound_slider.value/100;
	powerUp.volume = sound_slider.value/100;
	pushButton.volume = sound_slider.value/100;
	pushButton2.volume = sound_slider.value/100;
	winState.volume = sound_slider.value/100;

	sound_slider.oninput = function() {
		window.localStorage.setItem('soundVolume', JSON.stringify(this.value));
		ballHit.volume = this.value/100;
		brickBreak.volume = this.value/100;
		game_over_sound.volume = this.value/100;
		level_up_sound.volume = this.value/100;
		loseHeart.volume = this.value/100;
		powerUp.volume = this.value/100;
		pushButton.volume = this.value/100;
		pushButton2.volume = this.value/100;
		winState.volume = this.value/100;
	}
	
	music_slider.oninput = function() {
		window.localStorage.setItem('musicVolume', JSON.stringify(this.value));
		bgm1.volume = this.value/100;
		bgm2.volume = this.value/100;
		bgm3.volume = this.value/100;
		bgm4.volume = this.value/100;
		bgm5.volume = this.value/100;
		bgm6.volume = this.value/100;
	}

	buffer = document.createElement("canvas").getContext("2d");
	canvas = document.getElementById("ctx").getContext("2d");
	
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);

	levels = {

		map01 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 13, 15, 17, 10, 1, 0, 0, 0, 0, 0, 0, 0, 19, 14, 20, 2, 4, 17, 8, 17, 0, 0, 0, 0, 0, 0, 0, 21, 2, 9, 11, 9, 15, 0, 0, 0, 0, 0, 0, 4, 0, 0, 10, 11, 18, 16, 0, 0, 4, 0, 0, 0, 3, 11, 3, 0, 0, 19, 20, 0, 0, 3, 11, 3, 0, 2, 10, 18, 10, 2, 0, 0, 0, 0, 2, 10, 18, 10, 1, 0, 17, 13, 17, 9, 1, 0, 0, 1, 9, 17, 5, 17, 0, 0, 0, 20, 12, 16, 8, 7, 6, 8, 3, 4, 12, 0, 0, 0, 0, 0, 19, 11, 15, 14, 13, 15, 10, 11, 0, 0, 0, 0, 0, 0, 0, 18, 10, 21, 20, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	
		map02 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 10, 11, 12, 0, 0, 17, 18, 19, 4, 5, 0, 0, 8, 11, 14, 10, 13, 0, 0, 15, 16, 17, 18, 19, 0, 0, 15, 18, 21, 17, 20, 0, 0, 8, 9, 10, 11, 12, 0, 0, 8, 9, 10, 11, 12, 0, 0, 21, 14, 7, 6, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 1, 4, 7, 0, 0, 7, 20, 7, 13, 14, 0, 0, 9, 12, 8, 11, 14, 0, 0, 14, 6, 12, 4, 10, 0, 0, 16, 19, 15, 18, 21, 0, 0, 21, 13, 19, 11, 17, 0, 0, 15, 16, 17, 18, 19, 0, 0, 8, 20, 15, 18, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 5, 1, 0, 0, 7, 9, 13, 14, 14, 0, 0, 10, 13, 9, 12, 8, 0, 0, 14, 6, 12, 4, 10, 0, 0, 17, 20, 16, 19, 15, 0, 0, 21, 13, 19, 11, 17, 0, 0, 10, 11, 12, 13, 14, 0, 0, 15, 20, 11, 18, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map03 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 10, 11, 12, 13, 14, 1, 1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 21, 8, 8, 9, 10, 11, 12, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map04 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 3, 11, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 17, 16, 18, 4, 20, 0, 0, 0, 0, 0, 0, 0, 20, 10, 17, 18, 19, 13, 14, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 19, 8, 9, 10, 11, 12, 13, 10, 17, 7, 0, 6, 1, 16, 15, 16, 17, 18, 19, 20, 21, 6, 7, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 0, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 17, 18, 19, 20, 21, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map05 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 15, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 16, 0, 0, 9, 3, 0, 0, 0, 0, 0, 0, 0, 11, 17, 0, 13, 7, 0, 10, 4, 0, 0, 0, 0, 0, 12, 18, 0, 5, 20, 14, 6, 0, 11, 5, 0, 0, 0, 13, 19, 0, 4, 12, 20, 21, 13, 20, 0, 12, 6, 0, 14, 20, 0, 3, 11, 19, 0, 0, 20, 12, 4, 0, 13, 7, 21, 0, 2, 10, 18, 0, 3, 4, 0, 19, 11, 3, 0, 14, 0, 1, 9, 17, 0, 7, 10, 11, 1, 0, 18, 10, 2, 0, 7, 8, 16, 0, 10, 14, 17, 18, 8, 7, 0, 17, 9, 1, 14, 15, 0, 1, 17, 21, 0, 0, 15, 14, 3, 0, 16, 8, 0, 0, 1, 8, 19, 0, 17, 18, 0, 21, 10, 7, 0, 0, 0, 0, 8, 15, 0, 2, 8, 9, 10, 0, 17, 14, 0, 0, 0, 0, 0, 0, 16, 11, 0, 0, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map06 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 1, 8, 16, 11, 0, 6, 7, 0, 0, 0, 0, 0, 3, 2, 8, 15, 4, 0, 13, 6, 14, 0, 0, 0, 0, 10, 3, 9, 15, 19, 0, 20, 5, 13, 21, 0, 0, 0, 17, 4, 10, 16, 12, 0, 7, 4, 12, 20, 19, 0, 0, 2, 5, 11, 17, 5, 0, 21, 3, 11, 19, 12, 0, 0, 9, 6, 12, 18, 20, 0, 1, 2, 10, 18, 18, 0, 0, 16, 17, 13, 19, 13, 0, 8, 1, 9, 17, 11, 0, 0, 0, 1, 15, 20, 6, 0, 2, 7, 8, 16, 4, 0, 0, 0, 0, 8, 17, 21, 0, 9, 6, 14, 15, 17, 0, 0, 0, 0, 0, 15, 14, 0, 16, 5, 13, 21, 10, 0, 0, 0, 0, 0, 0, 7, 0, 4, 4, 12, 20, 3, 0, 0, 0, 0, 0, 0, 0, 0, 11, 3, 11, 19, 16, 0, 0, 0, 0, 0, 0, 0, 0, 17, 10, 10, 18, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 17, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 17, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map07 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 20, 0, 0, 0, 20, 5, 0, 0, 0, 0, 0, 0, 5, 13, 18, 14, 0, 8, 2, 12, 4, 0, 0, 0, 0, 0, 12, 2, 5, 21, 3, 15, 3, 4, 11, 0, 0, 0, 0, 3, 19, 9, 12, 7, 10, 6, 10, 11, 1, 1, 0, 0, 0, 10, 21, 16, 19, 14, 17, 13, 17, 18, 1, 8, 0, 0, 0, 17, 1, 2, 3, 4, 5, 6, 7, 1, 2, 15, 0, 0, 0, 4, 8, 9, 10, 11, 12, 13, 14, 8, 9, 2, 0, 0, 0, 11, 15, 16, 17, 18, 19, 20, 21, 15, 16, 9, 0, 0, 0, 18, 20, 1, 2, 3, 4, 5, 6, 7, 3, 16, 0, 0, 0, 0, 1, 8, 9, 10, 11, 12, 13, 14, 10, 0, 0, 0, 0, 0, 8, 15, 16, 17, 18, 19, 20, 21, 17, 0, 0, 0, 0, 0, 15, 7, 1, 3, 4, 5, 6, 4, 20, 0, 0, 0, 0, 0, 0, 14, 8, 10, 11, 12, 13, 11, 0, 0, 0, 0, 0, 0, 0, 21, 16, 17, 18, 19, 16, 18, 0, 0, 0, 0, 0, 0, 0, 0, 20, 6, 7, 5, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map08 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 12, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 19, 9, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 6, 16, 12, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 13, 3, 19, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 20, 10, 6, 15, 10, 5, 0, 0, 0, 0, 0, 0, 0, 10, 7, 17, 13, 2, 17, 12, 6, 0, 0, 0, 0, 0, 0, 17, 14, 4, 20, 9, 4, 19, 13, 7, 0, 0, 0, 0, 0, 4, 1, 11, 7, 16, 11, 8, 20, 14, 1, 0, 0, 0, 0, 11, 8, 18, 14, 17, 18, 15, 16, 21, 8, 2, 0, 0, 0, 18, 15, 18, 21, 19, 20, 21, 8, 9, 10, 11, 10, 0, 0, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 12, 0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20, 21, 15, 16, 17, 18, 19, 20, 21, 8, 9, 10, 11, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

		map09 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 0, 3, 6, 17, 18, 11, 17, 18, 19, 20, 21, 8, 0, 14, 0, 10, 13, 0, 0, 0, 0, 0, 0, 0, 3, 15, 0, 21, 0, 17, 20, 20, 21, 8, 9, 10, 11, 0, 10, 2, 0, 6, 0, 2, 5, 0, 0, 0, 0, 0, 6, 0, 17, 9, 0, 13, 0, 9, 12, 0, 0, 2, 3, 0, 13, 0, 1, 16, 0, 20, 0, 16, 19, 0, 0, 9, 10, 0, 20, 0, 4, 3, 0, 5, 0, 1, 4, 0, 0, 16, 17, 0, 7, 0, 11, 10, 0, 12, 0, 8, 11, 0, 0, 1, 1, 0, 14, 0, 18, 17, 0, 19, 0, 15, 18, 0, 0, 8, 4, 0, 21, 0, 5, 4, 0, 4, 0, 7, 3, 0, 0, 15, 11, 0, 1, 0, 12, 11, 0, 11, 0, 14, 10, 0, 0, 2, 18, 0, 8, 0, 19, 18, 0, 18, 0, 21, 17, 0, 0, 9, 5, 0, 15, 0, 6, 5, 0, 1, 0, 0, 0, 0, 0, 16, 12, 0, 2, 0, 13, 12, 0, 8, 9, 10, 11, 12, 13, 14, 19, 0, 9, 0, 20, 19, 0, 0, 0, 0, 0, 0, 0, 8, 9, 0, 16, 0, 12, 15, 16, 17, 18, 19, 20, 21, 15, 16, 17, 0, 18, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	};
	
	let map_col = 14;

	let secondPassed = 0;
	let oldTimeStamp = 0;
	let dt = 1/60.0;

	let WIDTH = canvas.canvas.width;
	let HEIGHT = canvas.canvas.height;

	buffer.canvas.width = WIDTH;
	buffer.canvas.height = HEIGHT;

	let right_arrow_keycode = 39;
	let left_arrow_keycode = 37;
	let a_keycode = 65;
	let d_keycode = 68;
	let esc_keycode = 27;

	let pressLeft;
	let pressRight;
	let game_over;
	let islevelUp;
	let isWin;

	let brickList;
	let heartList;
	let brokenBricks;

	let delay = 0;
	let frame_set;

	let level;
	let score;
	let high_score = 0;

	let state;
	let PAUSED = "paused";
	let PLAYING = "playing";

	let tilesets = {
		tileset1: {
			image: new Image(),
			columns: 7,
			rows: 3,
			tile_width: 32,
			tile_height: 16
		}
	};
	tilesets.tileset1.image.src = "img/tileset/brick_tileset.png";

	let heart_sprite_sheet = {
		spin: {
			frame_set : [0,1,2,3],
			image : new Image() 
		}
	}
	heart_sprite_sheet.spin.image.src = "img/heart/heart_sprite.png";

	function newGame(){
		pushButton2_sound();
		document.querySelector(".mainMenu").style.display="none";
		level = 0;
		score = 0;
		levelUp();
	}
	function restart(){
		pushButton2_sound();
		document.querySelector(".gameOver").style.display="none";
		level -= 1;
		levelUp();
	}
	function mainMenu(){
		pushButton2_sound();
		document.querySelector(".gameOver").style.display="none";
		document.querySelector(".mainMenu").style.display="block";
	}
	function pickLevel(){
		pushButton2_sound();
		score = 0;
		document.querySelector(".pickLevel").style.display="block";
		document.querySelector(".mainMenu").style.display="none";
	}
	function resume(){
		document.querySelector(".levelUpPage").style.display="none";
		levelUp();
	}
	function settings(){
		pushButton2_sound();
		document.querySelector(".mainMenu").style.display="none";
		document.querySelector(".settings").style.display="block";
	}
	function back(){
		pushButton2_sound();
		document.querySelector(".settings").style.display="none";
		if(state==PAUSED){
			document.querySelector(".pause").style.display = "block";
		}else{document.querySelector(".mainMenu").style.display="block"}
	}
	function back2(){
		pushButton2_sound();
		isExit = true;
		document.querySelector(".pause").style.display = "none";
		document.querySelector(".mainMenu").style.display="block";
	}
	function pause(){
		state = PAUSED;
		bgm_sound_stop();
		document.querySelector(".pause").style.display = "block";
	}
	function continue_func(){
		bgm_sound_play();
		pushButton2_sound();
		document.querySelector(".pause").style.display = "none";
		state = PLAYING;
	}

	function loop(timeStamp){
		getDeltaTime(timeStamp);

		if(state == PLAYING){
			ballCollision();

			ballMovement();
			paddleMovement();

			heartAnimUpdate();

			draw();
		}
		if(!game_over && !islevelUp && !isWin && !isExit){
			window.requestAnimationFrame(loop);
		}
		else if(game_over){
			gameOver();
		}
	}
	function Animation(){
		this.count = 0
		this.delay = delay;
		this.frame = 0;
		this.frame_index = 0;
		this.frame_set = frame_set;
	}
	Animation.prototype.change = function(frame_set, delay){
		if(this.frame_set != frame_set){
			this.count = 0;
			this.delay = delay;
			this.frame_index = 0;
			this.frame_set = frame_set;
			this.frame = this.frame_set[this.frame_index];
		}
	}
	Animation.prototype.update = function(){     
		this.count ++;
			if(this.count >= this.delay){
				this.count = 0;
				this.frame_index =(this.frame_index == this.frame_set.length -1)?0: this.frame_index + 1;
				this.frame = this.frame_set[this.frame_index];
			}
	}

	function Ball(){
		this.image = new Image(),
		this.x = 250,
		this.y = 450,
		this.velocity = 150,
		this.radius = 8,
		this.dx = 1,
		this.dy = -1
	}
	function ballReset(){
		ball.x = paddle.x + paddle.width/2;
		ball.y = 450;
		ball.dx = 1;
		ball.dy = -1;

	}
	function drawBall(){
		buffer.drawImage(ball.image, Math.floor(ball.x), Math.floor(ball.y), 16, 16);
	}
	function ballMovement(){
		ball.x += (ball.velocity * deltaTime ) * ball.dx;
		ball.y += (ball.velocity * deltaTime ) * ball.dy;
	}
	function ballCollision(){

		if(ball.y - ball.radius <= 0){
			ballHit_sound();
			ball.dy = ball.dy * -1;
			ball.y = ball.radius;
		}
		if(ball.y + ball.radius >= HEIGHT){
			loseHeart_sound();
			heartList.pop();
			if(heartList.length == 0){
				game_over = true;
			}else{
				ballReset();
			}

		}
		if(ball.x + ball.radius >= WIDTH){
			ballHit_sound();
			ball.dx = ball.dx * -1;
			ball.x = WIDTH-ball.radius;
		}
		if(ball.x - ball.radius <= 0){
			ballHit_sound();
			ball.dx = ball.dx * -1;
			ball.x = ball.radius;
		}

		let paddle_bottom = false;
		let paddle_top = false;
		let testX = ball.x;
		let testY = ball.y;
		if(ball.x < paddle.x){
			testX = paddle.x;
		}
		else if(ball.x > paddle.x+paddle.width){
			testX = paddle.x + paddle.width;
		}
		if(ball.y < paddle.y){
			testY = paddle.y;
			paddle_top=true;
		}
		else if(ball.y > paddle.y+ paddle.height){
			testY = paddle.y + paddle.height;
			paddle_bottom = true;
		}

		let distX = ball.x - testX;
		let distY = ball.y - testY;

		let distance = Math.sqrt((distX*distX)+(distY*distY));

		if(distance <= ball.radius){
			ballHit_sound();
			//Topun platforma çarptığı yer, platformun merkezine göre sağında mı yoksa solunda mı? eğer sağında 1 ve 0 arasında
			//pozitif bir değer alırız. Eğer solunda negatif bir değer alırız.
			let collidePoint = ball.x - (paddle.x + paddle.width/2);
			collidePoint = collidePoint / (paddle.width/2);
			//Ve bu değer 60 derece ile çarpıldığında açıya eşit olur.
			let angle = collidePoint * (Math.PI/3);
			//açıyı radyan türünden derece türüne çevirerek 70,90 ve -70,-90 arasında olup olmadığını kontrol edereriz. 
			//Çünkü bu açılar ile top çok yatay bir şekilde sekmektedir ve bu durum oyunun temposunu düşürüyor. 
			//Eğer o açılar arasında ise 60 da sabit kılarız.
			let degree = Math.floor(angle*180/Math.PI);
			if(degree>=70&&degree<=90){
				angle = 1.0471975512;//60 derece
			}
			else if(degree<=-70&&degree>=-90){
				angle = -1.0471975512;//-60 derece
			}
			//Son olarak topun x yönü bulunmak için açının sinüsü alınır, hız ve delta time ile çarpılır. 
			//Aynı şekilde y yönünü verecek değer ise açının kosinüsü ile hız ve delta time çarpılarak bulunur.
			//Eğer üstüne çarpmışsa y yönü - ile çarpılır. Çünkü bu sayede aşağı yöne doğru gelen top yukarı yönüne döner.
			//Aynı şekilde eğer aşağıdan yukarıya doğru çarparsa(az bir ihtimal olsa da gerçekleşiyor) aşağı yöne döner.
			if(paddle_top){
				ball.dx = ball.velocity * deltaTime * Math.sin(angle);
				ball.dy = -ball.velocity * deltaTime * Math.cos(angle);
			}
			if(paddle_bottom){
				ball.dx = -ball.velocity * deltaTime * Math.sin(angle);
				ball.dy = ball.velocity * deltaTime * Math.cos(angle);
			}
		}	

		for (let i = 0; i < brickList.length; i++){
			let b = brickList[i];
			if(b.status){
				let bottom = false;
				let top = false;
				let b_testX = ball.x;
				let b_testY = ball.y;

				if(ball.x < b.x){
					b_testX = b.x;
				}
				else if(ball.x > b.x + b.width){
					b_testX = b.x + b.width;
				}
				if(ball.y < b.y){
					b_testY = b.y;
					top = true;
				}
				else if(ball.y > b.y + b.height){
					b_testY = b.y + b.height;
					bottom = true;
					
				}

				let distX_fromBrick = ball.x - b_testX;
				let distY_fromBrick = ball.y - b_testY;

				let distance = Math.sqrt((distX_fromBrick * distX_fromBrick) + (distY_fromBrick * distY_fromBrick));

				if(distance < ball.radius){
					let collidePoint = ball.x - (b.x + b.width/2);
					collidePoint = collidePoint / (b.width/2);
					

					let angle = collidePoint * (Math.PI/3);
					let degree = Math.floor(angle*180/Math.PI);
					
					if(degree>=70&&degree<=90){
						angle = 1.0471975512;
					}
					else if(degree<=-70&&degree>=-90){
						angle = -1.0471975512;
					}

					if(top){
						ball.dx = ball.velocity * deltaTime * Math.sin(angle);
						ball.dy = -ball.velocity * deltaTime * Math.cos(angle);
					}
					if(bottom){
						ball.dx = -ball.velocity * deltaTime * Math.sin(angle);
						ball.dy = ball.velocity * deltaTime * Math.cos(angle);
					}
					brickBreak_sound();
					
					b.status = false;
					brokenBricks ++;
					scoreUp();
					if(brokenBricks == brickList.length){
						if((level+1) == 10){
							isWin=true;	
							win();
						}else{
							islevelUp = true;
							gotLevelUp();
						}
					}
				}
			}	
		}
	}

	function Paddle(){
		this.image = new Image(),
		this.x = 200,
		this.y = 490,
		this.width = 64,
		this.height = 20,
		this.velocity = 500
	}	
	function drawPaddle(){
		buffer.drawImage(paddle.image, Math.floor(paddle.x), Math.floor(paddle.y),paddle.width,paddle.height);
	}
	function paddleMovement(){
		if(pressRight&&paddle.x+paddle.width<WIDTH){
			paddle.x += (paddle.velocity * deltaTime);
		}
		if(pressLeft&&paddle.x>0){
			paddle.x -= (paddle.velocity * deltaTime);
		}
	}

	function Brick(x,y){
		this.image = new Image(),
		this.x = x,
		this.y = y,
		this.width = 32,
		this.height = 16,
		this.status = true
	}
	function drawMap (){
		for(let i = 0; i < map.length; i++){

			let value = map[i]-1;
			
			let source_x = (value%tilesets.tileset1.columns) * tilesets.tileset1.tile_width;
			let source_y = Math.floor(value/tilesets.tileset1.columns) * tilesets.tileset1.tile_height;

			let destination_x = (i%map_col) * tilesets.tileset1.tile_width;
			let destination_y = Math.floor(i/map_col) * tilesets.tileset1.tile_height;
			if(map[i] != 0){
				if(!isBrickAlive(destination_x, destination_y)){continue;}
			}
			buffer.drawImage(tilesets.tileset1.image, source_x, source_y, tilesets.tileset1.tile_width, tilesets.tileset1.tile_height, destination_x, destination_y, tilesets.tileset1.tile_width, tilesets.tileset1.tile_height );

		}
	}
	function createBrick(){
		for(let i = 0; i<map.length; i++){
			if(map[i] != 0){
				let x = (i%map_col)*tilesets.tileset1.tile_width;
				let y = Math.floor(i/map_col)*tilesets.tileset1.tile_height;
				let brick = new Brick(x, y);
				brickList.push(brick);
			}	
		}
	}
	function isBrickAlive(x,y){
		for(let i = 0; i < brickList.length; i++){
			let brick = brickList[i];
			if(brick.status && brick.x == x && brick.y == y){
				return true;
			}
		}
	}

	function scoreUp(){
		score += 1;
	}
	function scoreText(){
		buffer.font = `12px gameFont`;
		buffer.fillStyle = "white";
		buffer.fillText("score:"+ score, 8, 24);
	}
	function highScoreText(){
		buffer.font = `12px gameFont`;
		buffer.fillStyle = "white";
		buffer.fillText("high score:"+ high_score, 150, 24);
	}

	function Heart(x,y){
		this.image = new Image(),
		this.animation = new Animation(),
		this.x = x,
		this.y = y,
		this.width = 7,
		this.height = 7
	}
	function heartCreate(){
		let heart4 = new Heart(425,8);
		heartList.push(heart4);
		let heart3 = new Heart(400,8);
		heartList.push(heart3);
		let heart2 = new Heart(375,8);
		heartList.push(heart2);
		let heart1 = new Heart(350,8);
		heartList.push(heart1);
	}
	function heartDraw(){
		for(let i = 0; i < heartList.length; i++){
			let heart = heartList[i];
			buffer.drawImage(heart_sprite_sheet.spin.image, heart.width * heart.animation.frame, 0, heart.width, heart.height, heart.x, heart.y, 14, 14);
		}
	}
	function heartMovement(){
		for(let i = 0; i < heartList.length; i++){
			let heart = heartList[i];
			heart.image = heart_sprite_sheet.spin.image;
			heart.animation.change(heart_sprite_sheet.spin.frame_set, 12);
		}
	}
	function heartAnimUpdate(){
		for(let i = 0; i < heartList.length; i++){
			let heart = heartList[i];
			heart.animation.update();
		}
	}

	function draw(){
		//önce tampon kanvas temizlenir daha sonra arkadan öne doğru katman katman arkaplan, tuğlalar, platform, yazılar, kalpler ve top çizilir.
		//daha sonra tampon canvasa çizilen her şey bir bütün olarak ana canvasa çizilir. Böylece performans artmış olur ve çizim sırasında oluşabilecek hatalar önlenir.
		buffer.clearRect(0,0,WIDTH,HEIGHT);
		buffer.imageSmoothingEnabled = false;
		buffer.save();
		drawBg();
		drawMap();
		drawPaddle();
		scoreText();
		highScoreText();
		heartDraw();
		drawBall();

		canvas.drawImage(buffer.canvas, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT);
		buffer.restore();
		
	}

	function keyDown(event){
		event.preventDefault();
		if(event.keyCode === right_arrow_keycode || event.keyCode === d_keycode){
			pressRight = true;
		}
		if(event.keyCode === left_arrow_keycode || event.keyCode === a_keycode){
			pressLeft = true;
		}
		if(event.keyCode === esc_keycode){
			if(!game_over && !islevelUp && !isWin && !isExit){
				pause();
			}
		}
	}
	function keyUp(event){
		event.preventDefault();
		if(event.keyCode === right_arrow_keycode || event.keyCode === d_keycode){
			pressRight = false;
		}
		if(event.keyCode === left_arrow_keycode || event.keyCode === a_keycode){
			pressLeft = false;
		}
	}

	function whichBg(colorCode){
		buffer.beginPath();
		buffer.fillStyle =  colorCode;
		buffer.fillRect(0,0,WIDTH,HEIGHT);
		buffer.closePath();
	}
	function drawBg(){
		switch(level){
			case 1:
				whichBg("#76428A");
				break;
			case 2:
				whichBg("#8C2929");
				break;
			case 3:
				whichBg("#639BFF");
				break;
			case 4:
				whichBg("#4B692F");
				break;
			case 5:
				whichBg("#9BADB7");
				break;
			case 6:
				whichBg("#D95763");
				break;
			case 7:
				whichBg("#3F3F74");
				break;
			case 8:
				whichBg("#663931");
				break;
			case 9:
				whichBg("#DF7126");
				break;
			default:
				whichBg("#639BFF");
				break;
		}
	}
	function getDeltaTime(timeStamp){
		secondPassed = (timeStamp - oldTimeStamp) / 1000;
		oldTimeStamp = timeStamp;
		deltaTime = Math.min(secondPassed , dt);
		let output = Math.floor(1/deltaTime);
		return deltaTime;
	}

	function levelUp(){

		high_score = JSON.parse(window.localStorage.getItem('high_score'));
		if(high_score == null){
			high_score = 0;
		}

		ball = new Ball();
		paddle = new Paddle();

		level++;
		switch(level){
			case 1:
				map = levels.map01;
				ball.image.src = "img/ball/blue_ball.png";
				ball.velocity = 150;
				paddle.image.src = "img/paddle/black_paddle.png";
				startGame();
				break;
			case 2:
				map = levels.map02;
				ball.image.src = "img/ball/green_ball.png";
				ball.velocity = 151;
				paddle.image.src = "img/paddle/blue_paddle.png";
				startGame();
				break;
			case 3:
				map = levels.map03;
				ball.image.src = "img/ball/purple_ball.png";
				ball.velocity = 152;
				paddle.image.src = "img/paddle/brown_paddle.png";
				startGame();
				break;
			case 4:
				map = levels.map04;
				ball.image.src = "img/ball/red_ball.png";
				ball.velocity = 153;
				paddle.image.src = "img/paddle/golden_paddle.png";
				startGame();
				break;
			case 5:
				map = levels.map05;
				ball.image.src = "img/ball/yellow_ball.png";
				ball.velocity = 154;
				paddle.image.src = "img/paddle/green_paddle.png";
				startGame();
				break;
			case 6:
				map = levels.map06;
				ball.image.src = "img/ball/blue_ball.png";
				ball.velocity = 155;
				paddle.image.src = "img/paddle/purple_paddle.png";
				startGame();
				break;
			case 7:
				map = levels.map07;
				ball.image.src = "img/ball/red_ball.png";
				ball.velocity = 156;
				paddle.image.src = "img/paddle/red_paddle.png";
				startGame();
				break;
			case 8:
				map = levels.map08;
				ball.image.src = "img/ball/yellow_ball.png";
				ball.velocity = 157;
				paddle.image.src = "img/paddle/black_paddle.png";
				startGame();
				break;
			case 9:
				map = levels.map09;
				ball.image.src = "img/ball/purple_ball.png";
				ball.velocity = 158;
				paddle.image.src = "img/paddle/blue_paddle.png";
				startGame();
				break;
			default:
				game_over = true;
				gameOver();
				break;
		}
	}
	function startGame(){

		secondPassed = 0;
		oldTimeStamp = 0;

		brokenBricks = 0;
		
		game_over = false;
		pressLeft = false;
		pressRight = false;
		islevelUp = false;
		isWin = false;
		isExit = false;
		
		
		brickList = new Array();
		heartList = new Array();

		createBrick();
		heartCreate();
		
		draw();

		startEngine();
	}
	function startEngine(){
		state = PLAYING;
		heartMovement();
		bgm_sound_play();
		window.requestAnimationFrame(loop);
		
	}
	function win(){
		bgm_sound_stop();
		winState_sound();
		document.getElementById("win_state").style.display = "block";
		document.getElementById("win_state").style.marginTop = "50px";
		document.getElementById("restart").style.display = "none";

		document.querySelector(".gameOver").style.display="block";
		document.getElementById("score").innerHTML = score;

		high_score = Math.max(score, high_score);
		window.localStorage.setItem('high_score', JSON.stringify(high_score));
		score = 0;
	}
	function gameOver(){

		bgm_sound_stop();
		gameOver_sound();
		document.getElementById("win_state").style.display = "none";
		document.getElementById("win_state").style.marginTop = "10px";
		document.getElementById("restart").style.display = "initial";
		
		document.querySelector(".gameOver").style.display="block";
		document.getElementById("score").innerHTML = score;

		high_score = Math.max(score, high_score);
		window.localStorage.setItem('high_score', JSON.stringify(high_score));
		score = 0;
	}
	function gotLevelUp(){
		high_score = Math.max(score, high_score);
		window.localStorage.setItem('high_score', JSON.stringify(high_score));
		bgm_sound_stop();
		levelUp_sound();
		document.querySelector(".levelUpPage").style.display="block";
	}

	function startLevel1(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 0;
		levelUp();
	}
	function startLevel2(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 1;
		levelUp();
	}
	function startLevel3(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 2;
		levelUp();
	}
	function startLevel4(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 3;
		levelUp();
	}
	function startLevel5(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 4;
		levelUp();
	}
	function startLevel6(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 5;
		levelUp();
	}
	function startLevel7(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 6;
		levelUp();
	}
	function startLevel8(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 7;
		levelUp();
	}
	function startLevel9(){
		pushButton2_sound();
		document.querySelector(".pickLevel").style.display="none";
		level = 8;
		levelUp();
	}

	function ballHit_sound(){
		let newAudio =  ballHit.cloneNode();
        newAudio.volume = sound_slider.value/100;
        newAudio.play();
	}
	function brickBreak_sound(){
		let newAudio =  brickBreak.cloneNode();
        newAudio.volume = sound_slider.value/100;
        newAudio.play();
	}
	function gameOver_sound(){
		game_over_sound.play();
	}
	function levelUp_sound(){
		//level_up_sound.load();
		level_up_sound.play();
	}
	function loseHeart_sound(){
		loseHeart.play();
	}
	function winState_sound(){
		winState.play();
	}
	function pushButton2_sound(){
		let newAudio =  pushButton2.cloneNode();
        newAudio.volume = sound_slider.value/100;
        newAudio.play();
	}

	function bgm1_sound(){
		bgm1.load();
		bgm1.play();
		bgm1.loop = true;
	}
	function bgm2_sound(){
		bgm2.load();
		bgm2.play();
		bgm2.loop = true;
	}
	function bgm3_sound(){
		bgm3.load();
		bgm3.play();
		bgm3.loop = true;
	}
	function bgm4_sound(){
		bgm4.load();
		bgm4.play();
		bgm4.loop = true;
	}
	function bgm5_sound(){
		bgm5.load();
		bgm5.play();
		bgm5.loop = true;
	}
	function bgm6_sound(){
		bgm6.load();
		bgm6.play();
		bgm6.loop = true;
	}
	function bgm_sound_stop(){
		switch(level){
			case 1:
				bgm1.pause();
				break;
			case 2:
				bgm2.pause();
				break;
			case 3:
				bgm3.pause();
				break;
			case 4:
				bgm4.pause();
				break;
			case 5:
				bgm5.pause();
				break;
			case 6:
				bgm6.pause();
				break;
			case 7:
				bgm1.pause();
				break;
			case 8:
				bgm2.pause();
				break;
			case 9:
				bgm3.pause();
				break;
			case 10:
				bgm1.pause();
				break;
		}
	}
	function bgm_sound_play(){
		switch(level){
			case 1:
				bgm1_sound();
				break;
			case 2:
				bgm2_sound();
				break;
			case 3:
				bgm3_sound();
				break;
			case 4:
				bgm4_sound();
				break;
			case 5:
				bgm5_sound();
				break;
			case 6:
				bgm6_sound();
				break;
			case 7:
				bgm1_sound();
				break;
			case 8:
				bgm2_sound();
				break;
			case 9:
				bgm3_sound();
				break;
			case 10:
				bgm1_sound();
				break;
		}
	}

