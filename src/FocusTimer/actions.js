import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
	state.isRunning = document.documentElement.classList.toggle("running");

	timer.countdown();

	sounds.buttonPressAudio.play();
}
export function reset() {
	state.isRunning = false;
	document.documentElement.classList.remove("running");
	timer.updateDisplay();
	sounds.buttonPressAudio.play();
}

export function set() {
	elements.minutes.setAttribute("contenteditable", true);
	elements.minutes.focus();
}

export function add5min() {
	let add5minutes = state.minutes + 5;
	add5minutes = add5minutes > 60 ? 60 : add5minutes;

	state.minutes = add5minutes;
	timer.updateDisplay();
}
export function remove5min() {
	let sub5Minutes = state.minutes - 5;
	sub5Minutes = sub5Minutes < 0 ? 0 : sub5Minutes;

	state.minutes = sub5Minutes;
	timer.updateDisplay();
}

export function toggleMusic(actionCardClicked) {
	state.isMute = !state.isMute;

	let buttonClicked = document.getElementById(`${actionCardClicked}`);

	if (state.isMute) {
		sounds[actionCardClicked].play();
		buttonClicked.classList.add("activate");
		return;
	}

	sounds[actionCardClicked].pause();
	buttonClicked.classList.remove("activate");
}
