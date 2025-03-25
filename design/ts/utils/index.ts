export function arrayShuffle<Type>(array: Type[]): Type[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function arrayPickRandomItem<Type>(array: Type[]): Type {
	return array[Math.floor(Math.random() * array.length)];
}

export function randomRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
