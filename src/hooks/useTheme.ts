import { useEffect, useState } from 'react';

const STORAGE_KEY = 'darkMode';

export function useTheme() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem(STORAGE_KEY) === 'true';
		setIsDarkMode(savedTheme);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('dark-mode', isDarkMode);
		localStorage.setItem(STORAGE_KEY, String(isDarkMode));
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	return { isDarkMode, toggleTheme };
}