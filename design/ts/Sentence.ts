import Word from "@/ts/Word";
import { WordQuote } from "@/ts/types/Words";
import Game from "@/ts/Game";
import NullSentenceTypeException from "@/ts/exceptions/NullSentenceTypeException";
import Caret from "@/ts/Caret";
import { appendsentence } from "@/ts/events";
import { fadeOutIn } from "@/ts/utils/animations";
import { arrayPickRandomItem, arrayShuffle, randomRange } from "@/ts/utils";
import { $ } from "@/ts/utils/dom";

export default class Sentence
{
	private sentence: Word[];
	private element: HTMLElement | null;

	constructor()
	{
		this.element = document.getElementById("words");
		this.reset();
	}

	[Symbol.iterator]()
	{
		let index = 0;
		let words = this.sentence;

		return {
			next() {
				if (index < words.length) {
					return { value: words[index++], done: false };
				}
				return { value: words[index], done: true };
			}
		};
	}

	public isElementEmpty(): boolean
	{
		return this.element === null;
	}

	public getElement(): HTMLElement | null
	{
		return this.element;
	}

	public toString(): string
	{
		return this.sentence.map(word => word.toString()).join(" ");
	}

	private setSentence(sentence: string|Word[]): this
	{
		if (typeof sentence === "string") {
			for (const word of sentence.split(" ")) {
				this.sentence.push(new Word(word));
			}
		}
		else if (Array.isArray(sentence)) {
			for (const word of sentence) {
				if (!Word.isWord(word))
					throw new Error("Appending words in sentence not using class Word");
				this.sentence.push(word);
			}
		}
		else throw new Error("Appending words in sentence not using Word[] or string");

		return this;
	}

	public reset(): this
	{
		this.sentence = [];
		this.element.replaceChildren();
		return this;
	}

	public appendToDOM(): this
	{
		if (this.isElementEmpty()) return this;

		const sentenceElement = this.getElement();
		Caret.fadeOutIn();
		fadeOutIn(sentenceElement,
			{
				onSecondHalf: () => {
					for (const word of this.sentence) {
						sentenceElement.appendChild(word.getHtmlElement());
					}
					document.dispatchEvent(appendsentence);
				}
			}
		);

		return this;
	}

	public isLoaded(): boolean
	{
		return this.sentence.length > 0;
	}

	public generate(): this
	{
		if (!Game.isWordsLoaded()) return this;
		if (Game.settings.wordType === null)
			throw new NullSentenceTypeException("No word type is set.");

		// language
		switch (Game.settings.language) {
			case "en":
				break;
			default:
				break;
		}

		// quotes
		if (Game.settings.wordType === "quotes") {
			const chosenQuote = arrayPickRandomItem(window.ENGLISH_QUOTES.quotes);
			Game.settings.setWordCount(chosenQuote.length);
			this.setSentence(chosenQuote.text);
			return this;
		}

		if (Game.settings.wordCount === 0) {
			throw new NullSentenceTypeException("No sentence size is set.");
		}

		let wordSet: string[] = [];
		wordSet = wordSet.concat(
			window.ENGLISH.words,
			window.ENGLISH_1K.words,
			// window.ENGLISH_5K.words,
			// window.ENGLISH_10K.words,
			// window.ENGLISH_25K.words,
		);
		wordSet = [...new Set(wordSet)];
		this.setSentence(
			arrayShuffle(wordSet)
				.slice(0, Game.settings.wordCount)
				.map((item) => {
					if (Game.settings.punctuation && !!randomRange(0, 1)) {
						const punctuations = [".", ",", "?", "!", '""', "()"];
						const chosenPunctuation = punctuations[randomRange(0, punctuations.length - 1)];
						if (chosenPunctuation.length === 2) {
							return `${chosenPunctuation[0]}${item}${chosenPunctuation[1]}`
						}
						return `${item}${chosenPunctuation[0]}`;
					}
					if (Game.settings.numbers && !!randomRange(0, 1)) {
						return randomRange(0, 9999).toString();
					}
					return item;
				})
				.join(" ")
		);
		return this;
	}

	public size(): number
	{
		return this.sentence.length;
	}
}