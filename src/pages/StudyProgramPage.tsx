import { useStudyProgramData } from '../hooks/useStudyProgramData';
import { ProgramContainer } from '../components/program/ProgramContainer';

export function StudyProgramPage() {
	const { data, loading, error } = useStudyProgramData();

	if (loading) {
		return <div style={{ padding: '1rem' }}>Cargando plan de estudio...</div>;
	}

	if (error || !data) {
		return <div style={{ padding: '1rem' }}>Error: {error ?? 'No se pudieron cargar los datos.'}</div>;
	}

	return <ProgramContainer program={data} />;
}