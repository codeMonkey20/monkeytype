export function fadeOutIn(
	element: HTMLElement,
	options?: {
		duration?: number;
		onComplete?: Function;
		onSecondHalf?: Function;
	}
): void {
	if (!options) {
		options = {};
	}
	options.duration = options.duration ?? 10;
	let opacity = 1;
	let isFadingIn = false;
	let isOnCompleteCalled = false;
	let isOnSecondHalfCalled = false;
	let interval = setInterval(() => {
		if (!isFadingIn) {
			if (opacity <= 0) {
				isFadingIn = true;
				element.style.opacity = "0";

				if (options?.onSecondHalf && !isOnSecondHalfCalled) {
					isOnSecondHalfCalled = true;
					options.onSecondHalf();
				}
			} else {
				opacity -= 0.05;
				element.style.opacity = opacity.toString();
			}
		} else {
			if (opacity >= 1) {
				clearInterval(interval);
				element.style.opacity = "1";

				if (options?.onComplete && !isOnCompleteCalled) {
					isOnCompleteCalled = true;
					options.onComplete();
				}
			} else {
				opacity += 0.05;
				element.style.opacity = opacity.toString();
			}
		}
	}, options.duration);
}
