import { useProgramMetrics } from '../hooks/useProgramMetrics';
import { useStudyProgramData } from '../hooks/useStudyProgramData';
import { ProfileSidebar } from '../components/profile/ProfileSidebar';
import { ProgramContainer } from '../components/program/ProgramContainer';

export function StudyProgramPage() {
	const { data, loading, error } = useStudyProgramData();
	const metrics = useProgramMetrics(data);

	if (loading) {
		return <main><p style={{ padding: '1rem' }}>Cargando plan de estudio...</p></main>;
	}

	if (error || !data || !metrics) {
		return <main><p style={{ padding: '1rem' }}>Error: {error ?? 'No se pudieron cargar los datos.'}</p></main>;
	}

	return (
		<main>
			<ProfileSidebar metrics={metrics} />
			<ProgramContainer program={data} />
		</main>
	);
}