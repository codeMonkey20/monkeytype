import Character from "@/ts/Character";
import NotTypeableCharacterException from "@/ts/exceptions/NotTypeableCharacterException";

export default class Letter extends Character
{
	constructor(character: string)
	{
		if (Character.isTypeable(character)) {
			super(character);
		} else {
			throw new NotTypeableCharacterException("Created a class Letter with a non-typeable character.");
		}
	}
}