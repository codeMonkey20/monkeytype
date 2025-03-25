import Letter from "@/ts/Letter";

export default class Word
{
	private word: Letter[];
	private htmlElement: HTMLDivElement;

	constructor(word: string)
	{
		this.word = [];
		this.htmlElement = document.createElement("div");
		this.htmlElement.classList.add("word");
		for (const letter of word) {
			const letterClass = new Letter(letter);
			this.word.push(letterClass);
			this.htmlElement.appendChild(letterClass.getHtmlElement());
		}
	}

	[Symbol.iterator]()
	{
		let index = 0;
		let letters = this.word;

		return {
			next() {
				if (index < letters.length) {
					return { value: letters[index++], done: false };
				}
				return { value: letters[index], done: true };
			}
		};
	}

	public toString(): string
	{
		return this.word.reduce((accumulator, letter) => accumulator + letter.getCharacter(), "");
	}

	public getHtmlElement(): HTMLDivElement
	{
		return this.htmlElement;
	}

	public toHtml(): string
	{
		return this.getHtmlElement().outerHTML;
	}

	public static isWord(arg: any): boolean
	{
		return arg instanceof this;
	}
}