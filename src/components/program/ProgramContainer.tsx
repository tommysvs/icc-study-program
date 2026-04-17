import { useState } from 'react';
import type { StudyProgram } from '../../types/study-program';
import { useCourseRelations } from '../../hooks/useCourseRelations';
import { StatusLegend } from './StatusLegend';
import { ProgramBlock } from './ProgramBlock';

interface ProgramContainerProps {
	program: StudyProgram;
}

export function ProgramContainer({ program }: ProgramContainerProps) {
	const [hoveredCourseCode, setHoveredCourseCode] = useState<string | null>(null);
	const relations = useCourseRelations(program);

	return (
		<section id="programContainer" className="program-container">
			<h3>{program.title}</h3>
			<StatusLegend />

			{program.blocks.map((block) => (
				<ProgramBlock
					key={block.name}
					block={block}
					hoveredCourseCode={hoveredCourseCode}
					relations={relations}
					onHoverCourse={setHoveredCourseCode}
					onLeaveCourse={() => setHoveredCourseCode(null)}
				/>
			))}
		</section>
	);
}