import NotCharacterException from "@/ts/exceptions/NotCharacterException";
import Keyboard from "@/ts/Keyboard";
import { TypeableKey } from "@/ts/types/Keys";

export default class Character
{
	private character: string;
	private keyCode: number;
	private htmlElement: HTMLSpanElement;

	constructor(char: string)
	{
		this.character = "";
		this.keyCode = -1;
		this.htmlElement = document.createElement("span");
		this.setCharacter(char);
	}

	private setCharacter(newCharacter: string): this
	{
		if (!Character.isCharacter(newCharacter))
			throw new NotCharacterException("Created or mutated a class Character with a string of characters.");

		this.character = newCharacter;
		this.keyCode = Character.getCharacterKeyCode(newCharacter);
		const element = document.createElement("span");
		const textNode = document.createTextNode(newCharacter);
		element.appendChild(textNode);
		element.classList.add("letter");
		this.htmlElement = element;
		return this;
	}

	public isTypeable(): boolean
	{
		return Character.isTypeable(this.getCharacter());
	}

	public getCharacter(): string
	{
		return this.character;
	}

	public getCharacterKeyCode(): number
	{
		return this.keyCode;
	}

	public getHtmlElement(): HTMLSpanElement
	{
		return this.htmlElement;
	}

	public toHtml(): string
	{
		return this.getHtmlElement().outerHTML;
	}

	public toString(): string
	{
		return this.getCharacter();
	}

	public static isTypeable(char: string): boolean {
        if (!Character.isCharacter(char)) {
            return false;
        }

        const isPossibleKey = (key: TypeableKey): boolean => {
            return key.char === char || key.shiftChar === char;
        };

        return Keyboard.TYPEABLE_KEYS.some(isPossibleKey);
    }

	public static getCharacterKeyCode(char: string): number
	{
		if (char === "") {
			return -1;
		}
	
		const isCharacterMatch = (character: string): boolean => {
			return character.toLowerCase() === char.toLowerCase();
		};
	
		const keyCodeFromMap = Keyboard.KEYBOARD_MAP.findIndex(isCharacterMatch);
	
		if (keyCodeFromMap !== -1) {
			return keyCodeFromMap;
		}
	
		const isTypeableKeyMatch = (key: TypeableKey): boolean => {
			return key.char === char || key.shiftChar === char;
		};
	
		const matchedTypeableKey = Keyboard.TYPEABLE_KEYS.find(isTypeableKeyMatch);
	
		if (matchedTypeableKey) {
			return matchedTypeableKey.keyCode;
		}
	
		return -1;
	}

	public static getCharacterShift(char: string): string
	{
        if (!Character.isTypeable(char)) {
            return "";
        }

        const matchedTypeableKey = Keyboard.TYPEABLE_KEYS.find(
            (typeable) => typeable.char === char || typeable.shiftChar === char
        );

        return matchedTypeableKey?.shiftChar ?? "";
    }

	public static isCharacter(char: string): boolean
	{
		return typeof char === "string" && char.length === 1;
	}
}