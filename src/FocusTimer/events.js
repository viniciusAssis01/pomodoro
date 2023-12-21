import * as elements from "./elements.js";
import * as actions from "./actions.js";
import * as timer from "./timer.js";
import state from "./state.js";

export function registerControls() {
	elements.controls.addEventListener("click", (event) => {
		const action = event.target.dataset.action;

		if (typeof actions[action] != "function") {
			return;
		}
		actions[action]();
	});
}

export function setMinutes() {
	elements.minutes.addEventListener("focus", () => {
		elements.minutes.textContent = "";
	});

	elements.minutes.onkeypress = (event) => /\d/.test(event.key);

	elements.minutes.addEventListener("blur", (event) => {
		let time = event.currentTarget.textContent;
		time = time > 60 ? 60 : time;

		state.minutes = time;
		state.seconds = 0;
		timer.updateDisplay();

		elements.minutes.removeAttribute("contenteditable");
	});
}

export function registerControlsCards() {
	elements.cardsSoundControls.addEventListener("click", (event) => {
		const actionCardClicked = event.target.dataset.song;

		if (!actions.toggleMusic) {
			return;
		}
		actions.toggleMusic(actionCardClicked);
	});
}
