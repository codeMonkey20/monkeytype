type WordsMetadata = {
	name: string;
	noLazyMode: boolean;
	orderedByFrequency: boolean;
	words: string[];
};

type WordQuote = {
	text: string;
	source: string;
	length: number;
	id: number;
};

type WordQuotesMetadata = {
	language: string;
	groups: number[][];
	quotes: WordQuote[];
};

type Language = "en";

export { WordsMetadata, WordQuotesMetadata, WordQuote, Language };
