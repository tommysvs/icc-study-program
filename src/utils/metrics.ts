import type { ProgramMetrics, StudyProgram } from '../types/study-program';
import { calculateGeneralGpa } from './gpa';

const approvedStatuses = new Set(['Aprobado', 'Suficiencia']);

function shouldCountPensum(blockName: string): boolean {
	return blockName !== 'CPG.' && blockName !== 'SEM.' && blockName !== 'XIII';
}

export function calculateProgramMetrics(program: StudyProgram): ProgramMetrics {
	let pensumCourses = 0;
	let approvedCourses = 0;
	let inProgressCourses = 0;

	for (const block of program.blocks) {
		for (const course of block.courses) {
			if (!shouldCountPensum(block.name)) {
				continue;
			}

			pensumCourses += 1;

			if (approvedStatuses.has(course.status)) {
				approvedCourses += 1;
			} else if (course.status === 'Cursando') {
				inProgressCourses += 1;
			}
		}
	}

	const totalCourses = approvedCourses + inProgressCourses;
	const remainingCourses = Math.max(0, pensumCourses - totalCourses);
	const percentage = pensumCourses === 0 ? 0 : Math.round((approvedCourses / pensumCourses) * 100);

	return {
		totalCourses,
		approvedCourses,
		inProgressCourses,
		remainingCourses,
		percentage,
		gpaGeneral: calculateGeneralGpa(program),
	};
}

