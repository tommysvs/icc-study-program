import type { ReactNode } from 'react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { ThemeToggle } from '../components/layout/ThemeToggle';
import { ProfileSidebar } from '../components/profile/ProfileSidebar';
import { useProgramMetrics } from '../hooks/useProgramMetrics';
import { useStudyProgramData } from '../hooks/useStudyProgramData';
import { useTheme } from '../hooks/useTheme';

type PageType = 'home' | 'program' | 'timeline';

interface AppLayoutProps {
	children: ReactNode;
	currentPage: PageType;
	onNavigate: (page: PageType) => void;
}

export function AppLayout({ children, currentPage, onNavigate }: AppLayoutProps) {
	const { isDarkMode, toggleTheme } = useTheme();
	const { data } = useStudyProgramData();
	const metrics = useProgramMetrics(data);

	return (
		<div className="app-wrapper">
			<Header currentPage={currentPage} onNavigate={onNavigate} />
			<main className="app-layout-main">
				{metrics && currentPage !== 'home' && <ProfileSidebar metrics={metrics} />}
				<div className="app-layout-content">
					{children}
				</div>
			</main>
			<Footer />
			<ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
		</div>
	);
}