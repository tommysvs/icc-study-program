import { useStudyProgramData } from '../hooks/useStudyProgramData';
import { useTimelineData } from '../hooks/useTimelineData';
import { ProgressTimeline } from '../components/timeline/ProgressTimeline';

export function ProgressTimelinePage() {
	const { data, loading, error } = useStudyProgramData();
	const timelineData = useTimelineData(data);

	if (loading) {
		return <div style={{ padding: '1rem' }}>Cargando datos de progreso...</div>;
	}

	if (error || !data) {
		return <div style={{ padding: '1rem' }}>Error: {error ?? 'No se pudieron cargar los datos.'}</div>;
	}

	return <ProgressTimeline timelineData={timelineData} />;
}