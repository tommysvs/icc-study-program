import { useState } from 'react';
import type { PeriodStats } from '../../hooks/useTimelineData';
import { CourseItem } from './CourseItem';

interface TimelinePeriodProps {
	period: PeriodStats;
	year: number;
}

export function TimelinePeriod({ period, year }: TimelinePeriodProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const periodKey = `${year}-${period.period}`;

	return (
		<div className="timeline-period">
			<button
				className={`period-header ${isExpanded ? 'expanded' : ''}`}
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
				<span className="period-title">{period.period} Período</span>
				<div className="period-stats">
					<span className="success">Aprobadas: {period.approved}</span>
                    <span className="failed">Reprobadas: {period.failed}</span>
					<span className="grade">{period.avgGrade}%</span>
					<span className="credits">{period.totalCredits} crédito(s)</span>
				</div>
			</button>

			{isExpanded && (
				<div className="courses-list">
					{period.courses.map((course) => (
						<CourseItem key={course.code} course={course} />
					))}
				</div>
			)}
		</div>
	);
}