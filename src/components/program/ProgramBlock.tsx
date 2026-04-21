import { useState } from 'react';
import type { Block, CourseRelationsMap } from '../../types/study-program';
import { CourseCard } from './CourseCard';

interface ProgramBlockProps {
	block: Block;
	hoveredCourseCode: string | null;
	relations: CourseRelationsMap;
	onHoverCourse: (code: string) => void;
	onLeaveCourse: () => void;
}

const COLLAPSIBLE_BLOCKS = new Set(['OTR.', 'CPG.', 'SEM.']);

export function ProgramBlock({ block, hoveredCourseCode, relations, onHoverCourse, onLeaveCourse }: ProgramBlockProps) {
	const [isOpen, setIsOpen] = useState(false);
	const isCollapsible = COLLAPSIBLE_BLOCKS.has(block.name);
	const relationState = hoveredCourseCode ? relations[hoveredCourseCode] : undefined;

	const labelClassName = ['block_label', isCollapsible ? 'collapsible' : '', isOpen ? 'active' : '']
		.filter(Boolean)
		.join(' ');

	return (
		<div className="block">
			<div className={labelClassName} onClick={() => isCollapsible && setIsOpen((prev) => !prev)}>
				{isCollapsible ? <span className="toggle-icon">▼</span> : null}
				{block.name}
			</div>

			<div className="block_courses" style={{ display: !isCollapsible || isOpen ? 'flex' : 'none' }}>
				{block.courses.map((course) => (
					<CourseCard
						key={course.code}
						course={course}
						isRequisite={relationState?.requisites.includes(course.code) ?? false}
						isOpening={relationState?.openings.includes(course.code) ?? false}
						onHoverStart={onHoverCourse}
						onHoverEnd={onLeaveCourse}
					/>
				))}
			</div>
		</div>
	);
}