window.CURRENT_LETTER_INDEX = 0;
window.TYPABLE_KEYS = [
	// Numbers and symbols on the number keys
	{ keyCode: 48, char: "0", shiftChar: ")" },
	{ keyCode: 49, char: "1", shiftChar: "!" },
	{ keyCode: 50, char: "2", shiftChar: "@" },
	{ keyCode: 51, char: "3", shiftChar: "#" },
	{ keyCode: 52, char: "4", shiftChar: "$" },
	{ keyCode: 53, char: "5", shiftChar: "%" },
	{ keyCode: 54, char: "6", shiftChar: "^" },
	{ keyCode: 55, char: "7", shiftChar: "&" },
	{ keyCode: 56, char: "8", shiftChar: "*" },
	{ keyCode: 57, char: "9", shiftChar: "(" },

	// Letters (A-Z)
	{ keyCode: 65, char: "a", shiftChar: "A" },
	{ keyCode: 66, char: "b", shiftChar: "B" },
	{ keyCode: 67, char: "c", shiftChar: "C" },
	{ keyCode: 68, char: "d", shiftChar: "D" },
	{ keyCode: 69, char: "e", shiftChar: "E" },
	{ keyCode: 70, char: "f", shiftChar: "F" },
	{ keyCode: 71, char: "g", shiftChar: "G" },
	{ keyCode: 72, char: "h", shiftChar: "H" },
	{ keyCode: 73, char: "i", shiftChar: "I" },
	{ keyCode: 74, char: "j", shiftChar: "J" },
	{ keyCode: 75, char: "k", shiftChar: "K" },
	{ keyCode: 76, char: "l", shiftChar: "L" },
	{ keyCode: 77, char: "m", shiftChar: "M" },
	{ keyCode: 78, char: "n", shiftChar: "N" },
	{ keyCode: 79, char: "o", shiftChar: "O" },
	{ keyCode: 80, char: "p", shiftChar: "P" },
	{ keyCode: 81, char: "q", shiftChar: "Q" },
	{ keyCode: 82, char: "r", shiftChar: "R" },
	{ keyCode: 83, char: "s", shiftChar: "S" },
	{ keyCode: 84, char: "t", shiftChar: "T" },
	{ keyCode: 85, char: "u", shiftChar: "U" },
	{ keyCode: 86, char: "v", shiftChar: "V" },
	{ keyCode: 87, char: "w", shiftChar: "W" },
	{ keyCode: 88, char: "x", shiftChar: "X" },
	{ keyCode: 89, char: "y", shiftChar: "Y" },
	{ keyCode: 90, char: "z", shiftChar: "Z" },

	// Punctuation and symbols
	{ keyCode: 32, char: " " },
	{ keyCode: 186, char: ";", shiftChar: ":" },
	{ keyCode: 187, char: "=", shiftChar: "+" },
	{ keyCode: 188, char: ",", shiftChar: "<" },
	{ keyCode: 189, char: "-", shiftChar: "_" },
	{ keyCode: 190, char: ".", shiftChar: ">" },
	{ keyCode: 191, char: "/", shiftChar: "?" },
	{ keyCode: 192, char: "`", shiftChar: "~" },
	{ keyCode: 219, char: "[", shiftChar: "{" },
	{ keyCode: 220, char: "\\", shiftChar: "|"},
	{ keyCode: 221, char: "]", shiftChar: "}" },
	{ keyCode: 222, char: "'", shiftChar: '"' },
];

function resetCaret() {
    if ($(".letter").length) {
        $("#caret").css("left", `${$(".letter").get(0).offsetLeft}px`);
        $("#caret").css("top", "21px");
    }
}

function resetGame() {
    resetCaret();
	window.GAME_STATUS = "stop";
    window.CURRENT_LETTER_INDEX = 0;
	$("#words-input").focus();
}