import type { ProgramMetrics } from '../../types/study-program';
import { GpaCard } from './GpaCard';
import { ProgressBar } from './ProgressBar';
import { StatsBadges } from './StatsBadges';

interface ProfileSidebarProps {
  metrics: ProgramMetrics;
}

export function ProfileSidebar({ metrics }: ProfileSidebarProps) {
	const baseUrl = import.meta.env.BASE_URL;

	return (
		<div className="sidebar-wrapper">
			<aside className="profile-sidebar">
				<div className="profile-card">
					<div className="profile-avatar">
						<img src={`${baseUrl}img/pp.bmp`} alt="Tommy Vega Profile Picture" />
					</div>
					<h2 className="profile-name">Tommy Vega</h2>
					<p className="profile-title">Estudiante</p>

					<ProgressBar percentage={metrics.percentage} />
					<GpaCard value={`${metrics.gpaGeneral}%`} />
				</div>

				<StatsBadges
					approved={metrics.approvedCourses}
					remaining={metrics.remainingCourses}
					inProgress={metrics.inProgressCourses}
					total={metrics.totalCourses}
				/>
			</aside>
		</div>
	);
}