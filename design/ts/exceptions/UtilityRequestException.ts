export default class UtilityRequestException extends Error
{
	constructor(message: string)
	{
		super(message);
		this.name = "UtilityRequestException";
		Object.setPrototypeOf(this, UtilityRequestException.prototype);
	}
}