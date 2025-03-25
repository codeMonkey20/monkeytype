export default class NotTypeableCharacterException extends Error
{
	constructor(message: string)
	{
		super(message);
		this.name = "NotTypeableCharacterException";
		Object.setPrototypeOf(this, NotTypeableCharacterException.prototype);
	}
}