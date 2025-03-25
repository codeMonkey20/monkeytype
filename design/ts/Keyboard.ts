import { TypeableKey } from "@/ts/types/Keys";

export default class Keyboard
{
    public static readonly KEYBOARD_MAP: string[] = ["","","","CANCEL","","","HELP","","BACK_SPACE","TAB","","","CLEAR","ENTER","ENTER_SPECIAL","","SHIFT","CONTROL","ALT","PAUSE","CAPS_LOCK","KANA","EISU","JUNJA","FINAL","HANJA","","ESCAPE","CONVERT","NONCONVERT","ACCEPT","MODECHANGE","SPACE","PAGE_UP","PAGE_DOWN","END","HOME","LEFT","UP","RIGHT","DOWN","SELECT","PRINT","EXECUTE","PRINTSCREEN","INSERT","DELETE","","0","1","2","3","4","5","6","7","8","9","COLON","SEMICOLON","LESS_THAN","EQUALS","GREATER_THAN","QUESTION_MARK","AT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","OS_KEY","","CONTEXT_MENU","","SLEEP","NUMPAD0","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD4","NUMPAD5","NUMPAD6","NUMPAD7","NUMPAD8","NUMPAD9","MULTIPLY","ADD","SEPARATOR","SUBTRACT","DECIMAL","DIVIDE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","","","","","","","","","NUM_LOCK","SCROLL_LOCK","WIN_OEM_FJ_JISHO","WIN_OEM_FJ_MASSHOU","WIN_OEM_FJ_TOUROKU","WIN_OEM_FJ_LOYA","WIN_OEM_FJ_ROYA","","","","","","","","","","","CIRCUMFLEX","EXCLAMATION","DOUBLE_QUOTE","HASH","DOLLAR","PERCENT","AMPERSAND","UNDERSCORE","OPEN_PAREN","CLOSE_PAREN","ASTERISK","PLUS","PIPE","HYPHEN_MINUS","OPEN_CURLY_BRACKET","CLOSE_CURLY_BRACKET","TILDE","","","","","VOLUME_MUTE","VOLUME_DOWN","VOLUME_UP","","","SEMICOLON","EQUALS","COMMA","MINUS","PERIOD","SLASH","BACK_QUOTE","","","","","","","","","","","","","","","","","","","","","","","","","OPEN_BRACKET","BACK_SLASH","CLOSE_BRACKET","QUOTE","","META","ALTGR","","WIN_ICO_HELP","WIN_ICO_00","","WIN_ICO_CLEAR","","","WIN_OEM_RESET","WIN_OEM_JUMP","WIN_OEM_PA1","WIN_OEM_PA2","WIN_OEM_PA3","WIN_OEM_WSCTRL","WIN_OEM_CUSEL","WIN_OEM_ATTN","WIN_OEM_FINISH","WIN_OEM_COPY","WIN_OEM_AUTO","WIN_OEM_ENLW","WIN_OEM_BACKTAB","ATTN","CRSEL","EXSEL","EREOF","PLAY","ZOOM","","PA1","WIN_OEM_CLEAR",""];
    public static readonly TYPEABLE_KEYS: TypeableKey[] = [
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
        { keyCode: 32, char: " ", shiftChar: " " },
        { keyCode: 186, char: ";", shiftChar: ":" },
        { keyCode: 187, char: "=", shiftChar: "+" },
        { keyCode: 188, char: ",", shiftChar: "<" },
        { keyCode: 189, char: "-", shiftChar: "_" },
        { keyCode: 190, char: ".", shiftChar: ">" },
        { keyCode: 191, char: "/", shiftChar: "?" },
        { keyCode: 192, char: "`", shiftChar: "~" },
        { keyCode: 219, char: "[", shiftChar: "{" },
        { keyCode: 220, char: "\\", shiftChar: "|" },
        { keyCode: 221, char: "]", shiftChar: "}" },
        { keyCode: 222, char: "'", shiftChar: '"' },
    ];

    
}