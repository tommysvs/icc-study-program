import type { ProgramMetrics, StudyProgram } from '../types/study-program';
import { calculateGeneralGpa } from './gpa';

const approvedStatuses = new Set(['Aprobado', 'Suficiencia']);

function shouldCountTotal(blockName: string): boolean {
	return blockName !== 'XIII' && blockName !== 'SEM.';
}

function shouldCountWithoutExtras(blockName: string): boolean {
	return blockName !== 'CPG.' && blockName !== 'SEM.' && blockName !== 'XIII';
}

export function calculateProgramMetrics(program: StudyProgram): ProgramMetrics {
	let totalCourses = 0;
	let approvedCourses = 0;
	let totalWithoutExtras = 0;
	let approvedWithoutExtras = 0;

	for (const block of program.blocks) {
		for (const course of block.courses) {
			if (shouldCountTotal(block.name)) {
				totalCourses += 1;

				if (approvedStatuses.has(course.status)) {
					approvedCourses += 1;
				}
			}

			if (shouldCountWithoutExtras(block.name)) {
				totalWithoutExtras += 1;

				if (approvedStatuses.has(course.status)) {
					approvedWithoutExtras += 1;
				}
			}
		}
	}

	const percentage = totalWithoutExtras === 0 ? 0 : Math.round((approvedWithoutExtras / totalWithoutExtras) * 100);

	return {
		totalCourses,
		approvedCourses,
		remainingCourses: totalCourses - approvedCourses,
		totalWithoutExtras,
		approvedWithoutExtras,
		percentage,
		gpaGeneral: calculateGeneralGpa(program),
	};
}

