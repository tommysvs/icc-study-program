import { useEffect, useState } from 'react';
import studyProgramData from '../data/study-program-data.json';
import type { StudyProgram } from '../types/study-program';

interface StudyProgramDataState {
	data: StudyProgram | null;
	loading: boolean;
	error: string | null;
}

export function useStudyProgramData(): StudyProgramDataState {
	const [data, setData] = useState<StudyProgram | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let active = true;

		async function loadData() {
			try {
				setLoading(true);

				const parsedData = studyProgramData as StudyProgram;

				if (active) {
					setData(parsedData);
					setError(null);
				}
			} catch (err) {
				if (active) {
					setError(err instanceof Error ? err.message : 'Error inesperado al cargar los datos.');
				}
			} finally {
				if (active) {
					setLoading(false);
				}
			}
		}

		void loadData();

		return () => {
			active = false;
		};
	}, []);

	return { data, loading, error };
}