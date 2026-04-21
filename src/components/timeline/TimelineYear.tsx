import { useState } from 'react';
import type { PeriodStats } from '../../hooks/useTimelineData';
import { TimelinePeriod } from './TimelinePeriod';

interface TimelineYearProps {
	year: number;
	periods: PeriodStats[];
}

export function TimelineYear({ year, periods }: TimelineYearProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const yearStats = {
		totalApproved: periods.reduce((sum, p) => sum + p.approved, 0),
		totalFailed: periods.reduce((sum, p) => sum + p.failed, 0),
		totalCredits: periods.reduce((sum, p) => sum + p.totalCredits, 0),
		avgGrade: Math.round(
			periods.reduce((sum, p) => sum + p.avgGrade, 0) / periods.length
		),
	};

	return (
		<div className="timeline-year">
			<button
				className={`year-header ${isExpanded ? 'expanded' : ''}`}
				onClick={() => setIsExpanded(!isExpanded)}
			>
			<span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
			<span className="year-title">{year}</span>
			<div className="year-stats">
				<span className="success">Aprobadas: {yearStats.totalApproved}</span>
                <span className="failed">Reprobadas: {yearStats.totalFailed}</span>
				<span className="grade">{yearStats.avgGrade}%</span>
				<span className="credits">{yearStats.totalCredits} crédito(s)</span>
			</div>
			</button>

			{isExpanded && (
				<div className="periods-container">
					{periods.map((period) => (
						<TimelinePeriod key={`${year}-${period.period}`} period={period} />
					))}
				</div>
			)}
		</div>
	);
}