import type { Block, Course, StudyProgram } from '../types/study-program';

function collectCourseGrades(course: Course): number[] {
	const grades: number[] = [];

	if (typeof course.grade === 'number') {
		grades.push(course.grade);
	}

	if (Array.isArray(course.gradeHistory)) {
		for (const attempt of course.gradeHistory) {
			if (typeof attempt.grade === 'number') {
				grades.push(attempt.grade);
			}
		}
	}

	return grades;
}

export function calculateBlockGpa(block: Block): string {
	const grades: number[] = [];

	for (const course of block.courses) {
		grades.push(...collectCourseGrades(course));
	}

	if (grades.length === 0) {
		return '0.00';
	}

	return (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
}

export function calculateGeneralGpa(program: StudyProgram): string {
	const grades: number[] = [];

	for (const block of program.blocks) {
		if (block.name === 'XIII' || block.name === 'CPG.' || block.name === 'SEM.') {
			continue;
		}

		for (const course of block.courses) {
			grades.push(...collectCourseGrades(course));
		}
	}

	if (grades.length === 0) {
		return '0.00';
	}

	return (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
}

