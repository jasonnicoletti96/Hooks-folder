import { useState } from "react";

export const useModal = (
	boolValue: boolean
): [boolean, (bool?: boolean) => void] => {
	const [bool, setBool] = useState<Boolean>(boolValue || false);

	const toggle = (boolToggle?: boolean) => {
		setBool(bool === undefined ? !bool : boolToggle);
	};

	return [bool, toggle];
};
