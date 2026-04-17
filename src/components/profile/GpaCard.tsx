interface GpaCardProps {
  value: string;
}

export function GpaCard({ value }: GpaCardProps) {
	return (
		<div className="gpa-section">
			<div className="gpa-item">
				<span className="gpa-label">Promedio académico</span>
				<span className="gpa-value" id="gpaGeneral">
					{value}
				</span>
			</div>
		</div>
	);
}