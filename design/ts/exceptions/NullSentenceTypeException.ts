export default class NullSentenceTypeException extends Error
{
	constructor(message: string)
	{
		super(message);
		this.name = "NullSentenceTypeException";
		Object.setPrototypeOf(this, NullSentenceTypeException.prototype);
	}
}