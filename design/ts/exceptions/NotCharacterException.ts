export default class NotCharacterException extends Error
{
	constructor(message: string)
	{
		super(message);
		this.name = "NotCharacterException";
		Object.setPrototypeOf(this, NotCharacterException.prototype);
	}
}