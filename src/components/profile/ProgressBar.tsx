interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
	return (
		<div className="profile-progress">
			<div className="progress-label">
				<span>Progreso</span>
				<span id="profilePercentage">{percentage}%</span>
			</div>
			<div className="progress-bar">
				<div className="progress-fill" id="profileProgressFill" style={{ width: `${percentage}%` }} />
			</div>
		</div>
	);
}