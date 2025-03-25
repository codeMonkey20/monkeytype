import "@/less/app.less";
import Game from "@/ts/Game";
import { $, $$, ready } from "@/ts/utils/dom";
import Caret from "@/ts/Caret";
import { fadeOutIn } from "@/ts/utils/animations";
import { GameMode } from "@/ts/types/Games";

const app = {
	config: () => {
		$$("#config button.config").forEach((button) => {
			button.addEventListener("click", () => {
				if (button.classList.contains("punctuation")) {
					Game.settings.togglePunctuation();
				}
				else if (button.classList.contains("numbers")) {
					Game.settings.toggleNumbers();
				}
				fadeOutIn(button, { duration: 5 });
				Game.sentence.reset().generate().appendToDOM();
				button.classList.toggle("active");
			});
		});
	},
	caretHeightHandler: () => {
		const lineHeight = $("#words > .word").offsetHeight;
		if (lineHeight.toString() !== Caret.element.style.height) {
			Caret.element.style.setProperty("height", `${lineHeight}px`);
		}
	},
	wordsContainerHeightHandler: () => {
		const letterHeight = $("#words > .word").offsetHeight;
		$("#words").style.setProperty("height", `calc((${letterHeight}px * 3) + (0.5em * 2))`);
	},
	init: async () => {
		await Game.loadAllWords();
		Game.settings.setWordType("words").setWordCount(50);
		Game.sentence.reset().generate().appendToDOM();
		app.config();

		window.addEventListener("resize", () => {
			app.caretHeightHandler();
			app.wordsContainerHeightHandler();
		});
		document.addEventListener("appendsentence", () => {
			app.caretHeightHandler();
			app.wordsContainerHeightHandler();
		});
	},
};

ready(app.init);