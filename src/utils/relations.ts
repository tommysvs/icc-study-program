import type { CourseRelationsMap, StudyProgram } from '../types/study-program';

export function buildCourseRelations(program: StudyProgram): CourseRelationsMap {
	const relations: CourseRelationsMap = {};

	for (const block of program.blocks) {
		for (const course of block.courses) {
			if (!relations[course.code]) {
				relations[course.code] = {
					requisites: [],
					openings: [],
				};
			}

			relations[course.code].requisites = [...course.requisites];
		}
	}

	for (const [courseCode, courseRelations] of Object.entries(relations)) {
		for (const requisiteCode of courseRelations.requisites) {
			if (!relations[requisiteCode]) {
				relations[requisiteCode] = {
					requisites: [],
					openings: [],
				};
			}

			relations[requisiteCode].openings.push(courseCode);
		}
	}

	return relations;
}

