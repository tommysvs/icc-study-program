export type CourseStatus = 'Aprobado' | 'Suficiencia' | 'Reprobado' | 'Pendiente' | 'Cursando';

export interface GradeAttempt {
	grade?: number;
	year?: number;
	period?: string;
	status?: CourseStatus;
}

export interface Course {
	code: string;
	name: string;
	credits: number;
	requisites: string[];
	status: CourseStatus;
	grade?: number;
	year?: number;
	period?: string;
	gradeHistory?: GradeAttempt[];
}

export interface Block {
	name: string;
	courses: Course[];
}

export interface StudyProgram {
	title: string;
	blocks: Block[];
}

export interface ProgramMetrics {
	totalCourses: number;
	approvedCourses: number;
	inProgressCourses: number;
	remainingCourses: number;
	percentage: number;
	gpaGeneral: string;
}

export interface CourseRelations {
	requisites: string[];
	openings: string[];
}

export type CourseRelationsMap = Record<string, CourseRelations>;