import { Language, WordQuotesMetadata, WordsMetadata } from "@/ts/types/Words";
import Sentence from "@/ts/Sentence";
import { GameMode } from "@/ts/types/Games";
import { wordsloaded } from "@/ts/events";
import { getRequest } from "@/ts/utils/http";

declare global {
	interface Window {
		ENGLISH_1K: WordsMetadata;
		ENGLISH_5K: WordsMetadata;
		ENGLISH_10K: WordsMetadata;
		ENGLISH_25K: WordsMetadata;
		ENGLISH: WordsMetadata;
		ENGLISH_QUOTES: WordQuotesMetadata;
	}
}

class GameSettings
{
    private static _wordType: GameMode | null = null;
    private static _wordCount: number = 10;
    private static _language: Language | null = null;
    private static _punctuation: boolean = false;
    private static _numbers: boolean = false;
    private static _duration: number = 10;

    public static isReady(): boolean
    {
        return !!GameSettings._language && 
                !!GameSettings._wordType && 
                (!!GameSettings._wordCount || !!GameSettings._duration);
    }

    public static get duration(): number
    {
        return GameSettings._duration;
    }

    public static setDuration(seconds: number): typeof GameSettings
    {
        if (seconds < 0) {
            GameSettings._duration = 0;
        } else {
            GameSettings._duration = seconds;
        }
        return GameSettings;
    }

    public static get wordType(): GameMode
    {
        return GameSettings._wordType;
    }

    public static setWordType(type: GameMode): typeof GameSettings
    {
        GameSettings._wordType = type;
        return GameSettings;
    }

    public static get wordCount(): number
    {
        return GameSettings._wordCount;
    }

    public static setWordCount(count: number): typeof GameSettings
    {
        GameSettings._wordCount = count;
        return GameSettings;
    }

    public static get language(): Language
    {
        return GameSettings._language;
    }

    public static setLanguage(lang: Language): typeof GameSettings
    {
        GameSettings._language = lang;
        return GameSettings;
    }

    public static get punctuation(): boolean
    {
        return GameSettings._punctuation;
    }

    public static togglePunctuation(): typeof GameSettings
    {
        GameSettings._punctuation = !GameSettings._punctuation;
        return GameSettings;
    }

    public static get numbers(): boolean
    {
        return GameSettings._numbers;
    }

    public static toggleNumbers(): typeof GameSettings
    {
        GameSettings._numbers = !GameSettings._numbers;
        return GameSettings;
    }
}

export default class Game
{
    public static readonly sentence: Sentence = new Sentence();
    public static readonly settings: typeof GameSettings = GameSettings;
    private static _isWordsLoaded: boolean = false;
    private static _isIconsLoaded: boolean = false;

    public static isWordsLoaded(): boolean
    {
        return Game._isWordsLoaded;
    }

    public static isIconsLoaded(): boolean
    {
        return Game._isIconsLoaded;
    }

	public static async loadAllWords()
    {
        Game._isWordsLoaded = false;
        try {
            await Promise.all([
                getRequest<WordsMetadata>("/words/english_1k.json").then(
                    (json) => {
                        window.ENGLISH_1K = json;
                    }
                ),
                getRequest<WordsMetadata>("/words/english_5k.json").then(
                    (json) => {
                        window.ENGLISH_5K = json;
                    }
                ),
                getRequest<WordsMetadata>("/words/english_10k.json").then(
                    (json) => {
                        window.ENGLISH_10K = json;
                    }
                ),
                getRequest<WordsMetadata>("/words/english_25k.json").then(
                    (json) => {
                        window.ENGLISH_25K = json;
                    }
                ),
                getRequest<WordsMetadata>("/words/english.json").then(
                    (json) => {
                        window.ENGLISH = json;
                    }
                ),
                getRequest<WordQuotesMetadata>(
                    "/words/english_quotes.json"
                ).then((json) => {
                    window.ENGLISH_QUOTES = json;
                }),
            ]);
            Game._isWordsLoaded = true;
            document.dispatchEvent(wordsloaded);
        } catch (error) {
            console.error(error);
        }
	}

    public static start(): void
    {
        if (Game.sentence.isLoaded()) {
            // timer start
        }
    }
}
