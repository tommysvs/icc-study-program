import type { StudyProgram, Course } from '../types/study-program';

export interface PeriodStats {
	period: string;
	year: number;
	courses: Course[];
	approved: number;
	failed: number;
	inProgress: number;
	avgGrade: number;
	totalCredits: number;
}

export interface TimelineData {
	[year: number]: PeriodStats[];
}

function romanToNumber(roman: string): number {
	const romanMap: { [key: string]: number } = {
		'I': 1,
		'II': 2,
		'III': 3
	};
	return romanMap[roman] || 0;
}

export function useTimelineData(program: StudyProgram | null): TimelineData {
	if (!program) return {};

	const timelineMap = new Map<string, PeriodStats>();
	const allCourses: Course[] = [];

	program.blocks.forEach(block => {
		allCourses.push(...block.courses);
	});

	allCourses.forEach(course => {
		if (course.year && course.period) {
			const key = `${course.year}-${course.period}`;
			
			if (!timelineMap.has(key)) {
				timelineMap.set(key, {
					period: course.period,
					year: course.year,
					courses: [],
					approved: 0,
					failed: 0,
					inProgress: 0,
					avgGrade: 0,
					totalCredits: 0,
				});
			}

			const stats = timelineMap.get(key)!;
			stats.courses.push(course);
			stats.totalCredits += course.credits;

			if (course.status === 'Aprobado') {
				stats.approved++;
			} else if (course.status === 'Reprobado') {
				stats.failed++;
			} else if (course.status === 'Cursando') {
				stats.inProgress++;
			}
		}

		if (course.gradeHistory) {
			course.gradeHistory.forEach(attempt => {
				if (attempt.year && attempt.period) {
					const historyKey = `${attempt.year}-${attempt.period}`;
					
					if (!timelineMap.has(historyKey)) {
						timelineMap.set(historyKey, {
							period: attempt.period,
							year: attempt.year,
							courses: [],
							approved: 0,
							failed: 0,
							inProgress: 0,
							avgGrade: 0,
							totalCredits: 0,
						});
					}

					const historyStats = timelineMap.get(historyKey)!;
					
					const historicalCourse: Course = {
						...course,
						status: attempt.status || course.status,
						grade: attempt.grade || course.grade,
					};
					
					historyStats.courses.push(historicalCourse);
					historyStats.totalCredits += course.credits;
					
					if (attempt.status === 'Reprobado') {
						historyStats.failed++;
					} else if (attempt.status === 'Aprobado') {
						historyStats.approved++;
					} else if (attempt.status === 'Cursando') {
						historyStats.inProgress++;
					}
				}
			});
		}
	});

	timelineMap.forEach(stats => {
		const gradesSum = stats.courses
			.filter(c => c.grade)
			.reduce((sum, c) => sum + (c.grade || 0), 0);
		const coursesWithGrades = stats.courses.filter(c => c.grade).length;
		stats.avgGrade = coursesWithGrades > 0 ? Math.round(gradesSum / coursesWithGrades) : 0;
	});

	const timeline: TimelineData = {};
	
	Array.from(timelineMap.values())
		.sort((a, b) => a.year - b.year || romanToNumber(a.period) - romanToNumber(b.period))
		.forEach(stats => {
			if (!timeline[stats.year]) {
				timeline[stats.year] = [];
			}
			timeline[stats.year].push(stats);
		});

	return timeline;
}