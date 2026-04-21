import type { TimelineData } from '../../hooks/useTimelineData';
import { TimelineYear } from './TimelineYear';

interface ProgressTimelineProps {
	timelineData: TimelineData;
}

export function ProgressTimeline({ timelineData }: ProgressTimelineProps) {
	const years = Object.keys(timelineData)
		.map(Number)
		.sort((a, b) => a - b);

	if (years.length === 0) {
		return (
			<section className="timeline-section">
				<h3>Progreso académico</h3>
				<p>No hay datos de progreso disponibles</p>
			</section>
		);
	}

	return (
		<section className="timeline-section">
			<h3>Progreso académico</h3>
			<div className="timeline-container">
				{years.map((year) => (
					<TimelineYear key={year} year={year} periods={timelineData[year]} />
				))}
			</div>
		</section>
	);
}