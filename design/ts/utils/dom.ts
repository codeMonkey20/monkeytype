export function ready(fn: () => void) {
	if (document.readyState !== "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn, { once: true });
	}
}

export function $(selector: string) {
	return document.querySelector<HTMLElement>(selector);
}

export function $$(selector: string) {
	return document.querySelectorAll<HTMLElement>(selector);
}
