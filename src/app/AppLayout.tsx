import type { ReactNode } from 'react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { ThemeToggle } from '../components/layout/ThemeToggle';
import { useTheme } from '../hooks/useTheme';

interface AppLayoutProps {
	children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<>
			<Header />
			{children}
			<Footer />
			<ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
		</>
	);
}