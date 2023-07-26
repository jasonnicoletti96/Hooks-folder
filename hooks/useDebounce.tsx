import { useState, useRef } from "react";

export const useDebounce = (
	func: (...args: any) => any,
	delay: number
): [any, () => void] => {
	const [debouncedValue, setDebouncedValue] = useState<any>(null);
	const timerRef = useRef<any>(null);

	const debounceFunction = () => {
		// Clear the timer if it's already running
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		// Create a timeout with the specified delay
		timerRef.current = setTimeout(() => {
			setDebouncedValue(func);
		}, delay);
	};

	return [debouncedValue, debounceFunction];
};
