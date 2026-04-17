import { useMemo } from 'react';
import type { CourseRelationsMap, StudyProgram } from '../types/study-program';
import { buildCourseRelations } from '../utils/relations';

export function useCourseRelations(program: StudyProgram | null): CourseRelationsMap {
	return useMemo(() => {
		if (!program) {
			return {};
		}

		return buildCourseRelations(program);
	}, [program]);
}