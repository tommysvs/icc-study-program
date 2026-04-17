interface ThemeToggleProps {
	isDarkMode: boolean;
	onToggle: () => void;
}

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
	return (
		<label className="dark-mode-switch">
			<input type="checkbox" id="darkModeToggle" checked={isDarkMode} onChange={onToggle} />
			<span className="slider">
				<i className="fas fa-sun icon sun" aria-hidden="true" />
				<i className="fas fa-moon icon moon" aria-hidden="true" />
			</span>
		</label>
	);
}