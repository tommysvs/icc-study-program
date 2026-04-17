import { useMemo } from 'react';
import type { ProgramMetrics, StudyProgram } from '../types/study-program';
import { calculateProgramMetrics } from '../utils/metrics';

export function useProgramMetrics(program: StudyProgram | null): ProgramMetrics | null {
	return useMemo(() => {
		if (!program) {
			return null;
		}

		return calculateProgramMetrics(program);
	}, [program]);
}