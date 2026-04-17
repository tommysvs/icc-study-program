import type { Course } from '../../types/study-program';
import { getCourseStatusClass } from '../../utils/status';

interface CourseCardProps {
	course: Course;
	isRequisite?: boolean;
	isOpening?: boolean;
	onHoverStart: (code: string) => void;
	onHoverEnd: () => void;
}

export function CourseCard({ course, isRequisite = false, isOpening = false, onHoverStart, onHoverEnd }: CourseCardProps) {
	const className = [
		'blockClass',
		getCourseStatusClass(course.status),
		isRequisite ? 'class_requisite' : '',
		isOpening ? 'class_opening' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={className} onMouseEnter={() => onHoverStart(course.code)} onMouseLeave={onHoverEnd}>
			<div className="course-header">
				<span>{course.code}</span>
				<span>{course.credits}</span>
			</div>

			<span className="course-name">{course.name}</span>

			{(course.grade !== undefined || course.year !== undefined) && (
				<div className="course-info-container">
					{course.grade !== undefined && <div className="course-grade">{course.grade}%</div>}
					{course.year !== undefined && <div className="course-year">{course.year}</div>}
				</div>
			)}
		</div>
	);
}