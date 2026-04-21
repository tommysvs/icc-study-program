import type { Course } from '../../types/study-program';

interface CourseItemProps {
	course: Course;
}

export function CourseItem({ course }: CourseItemProps) {
	const getStatusClass = (status: string) => {
		const lower = status.toLowerCase();
		if (lower === 'aprobado') return 'success';
		if (lower === 'reprobado') return 'failed';
		return 'in-progress';
	};

	return (
		<div className="course-item">
			<div className="course-info">
				<span className="course-code">{course.code}</span>
				<span className="course-name">{course.name}</span>
			</div>
			<div className="course-stats">
				<span className={getStatusClass(course.status)}>
					{course.status}
				</span>
				{course.grade && (
					<span className="grade">{course.grade}%</span>
				)}
				<span className="credits">{course.credits} crédito(s)</span>
			</div>
		</div>
	);
}