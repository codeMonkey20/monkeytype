import UtilityRequestException from "@/ts/exceptions/UtilityRequestException";

export async function getRequest<T>(
	url: RequestInfo | URL,
	httpBody?: string | object | undefined,
	options?: (RequestInit & { responseType?: "json" | "text" }) | undefined
): Promise<T> {
	if (!url) throw new UtilityRequestException("Empty URI Request");
	if (!options) {
		options = {};
	}
	if (httpBody) {
		if (typeof httpBody === "object") {
			httpBody = JSON.stringify(httpBody);
		}
		options.body = httpBody;
	}
	options.method = "GET";
	const http = await fetch(url, options);
	if (options?.responseType === "text") {
		return (await http.text()) as T;
	}
	return (await http.json()) as T;
}
