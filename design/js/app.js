$("form[name='game-settings']")
	.find("select")
	.on("change", function() {
		$(this).closest("form").trigger("submit");
		if ($(this).is("select[name='type']")) {
			if ($(this).val() === "quotes") $("select[name='count']").hide();
			else $("select[name='count']").show();
		}
	});

$("#words").on("click", function() { $("#words-input").focus(); });

$("form[name='game-settings']").ajaxForm({
	success: function (response) {
		$("#words").html("");
		if (Array.isArray(response)) {
			response.forEach((word) => {
				const currentWordElement = $(
					`<div class="word"></div>`
				).appendTo("#words");
				for (const letter of word) {
					currentWordElement.append(
						`<span class="letter">${letter}</span>`
					);
				}
				currentWordElement.append(`<span class="letter">&nbsp;</span>`)
			});
		} else {
			response.text.split(" ").forEach((word) => {
				const currentWordElement = $(
					`<div class="word"></div>`
				).appendTo("#words");
				for (const letter of word) {
					currentWordElement.append(
						`<span class="letter">${letter}</span>`
					);
				}
				currentWordElement.append(`<span class="letter">&nbsp;</span>`)
			});
		}
		window.TOTAL_LETTERS = $(".letter").length;
		$("#words-input").focus();
		resetGame();
	},
});

$("#words-input")
	.on("focus", function () {
		$("#words").removeClass("blurred");
		$("#caret").show();
		$("#blurred-message").addClass("hidden");

		if (!$._data($(this)[0], "events").keydown) {
			$(this).on("keydown", function (event) {
				window.GAME_STATUS = "running";
				const isTypable = window.TYPABLE_KEYS.some(({ keyCode, char, shiftChar }) => event.key === char || event.key === shiftChar || event.which === keyCode);
				if (isTypable) {
					let letterIdx = window.CURRENT_LETTER_INDEX;
	
					if (event.key === $($(".letter").get(letterIdx)).text()) {
						$($(".letter").get(letterIdx))
							.addClass("correct")
							.closest("#word")
							.addClass(["typed", "active"])
					} else {
						$($(".letter").get(letterIdx))
							.addClass("incorrect")
							.closest("#word")
							.addClass(["typed", "active"])
					}
	
					// caret
					letterIdx++;
					if (letterIdx < $(".letter").length) {
						$("#caret").css("left", `${$(".letter").get(letterIdx).offsetLeft}px`);
						$("#caret").css("top", `${$(".letter").get(letterIdx).offsetTop}px`);
						window.CURRENT_LETTER_INDEX = letterIdx;
					}
				}
				else if (event.key === "Backspace") {
					let letterIdx = window.CURRENT_LETTER_INDEX;
					letterIdx--;
	
					$($(".letter").get(letterIdx)).removeClass(["incorrect", "correct"]);
	
					// caret
					if (letterIdx >= 0) {
						$("#caret").css("left", `${$(`.letter`).get(letterIdx).offsetLeft}px`);
						$("#caret").css("top", `${$(`.letter`).get(letterIdx).offsetTop}px`);
						window.CURRENT_LETTER_INDEX = letterIdx;
					}
				}
			});
		}
	})
	.on("blur", function () {
		$("#words").addClass("blurred");
		$("#blurred-message").removeClass("hidden");
		$("#caret").hide();
		$(this).off("keydown");
	});

$(() => {
	window.GAME_STATUS = "stop";
	$("form[name='game-settings']").trigger("submit");
	$("#words-input").focus();
	resetGame();

	// const textDisplay = document.getElementById("text-display");
	// const inputArea = document.getElementById("input-area");
	// const startButton = document.getElementById("start-button");
	// const resultDisplay = document.getElementById("result");

	// let startTime;
	// let timerRunning = false;
	// textDisplay.textContent = sampleText;

	// startButton.addEventListener("click", () => {
	// 	if (timerRunning) return;

	// 	inputArea.value = "";
	// 	inputArea.disabled = false;
	// 	inputArea.focus();
	// 	startTime = new Date().getTime();
	// 	timerRunning = true;
	// 	resultDisplay.textContent = "";

	// 	startButton.textContent = "Test Running...";
	// 	startButton.disabled = true;
	// });

	// inputArea.addEventListener("input", () => {
	// 	if (!timerRunning) return;

	// 	const inputText = inputArea.value;
	// 	if (inputText === sampleText) {
	// 		const endTime = new Date().getTime();
	// 		const timeTaken = (endTime - startTime) / 1000;
	// 		const wordCount = sampleText.split(" ").length;
	// 		const wpm = Math.round((wordCount / timeTaken) * 60);

	// 		resultDisplay.textContent = `You typed ${wordCount} words in ${timeTaken.toFixed(
	// 			2
	// 		)} seconds. Your typing speed is ${wpm} WPM.`;

	// 		inputArea.disabled = true;
	// 		startButton.textContent = "Start Test";
	// 		startButton.disabled = false;
	// 		timerRunning = false;
	// 	}
	// });
});
