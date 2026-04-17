interface StatsBadgesProps {
	program: string;
	remaining: number;
	approved: number;
	total: number;
}

export function StatsBadges({ program, remaining, approved, total }: StatsBadgesProps) {
	return (
		<div className="profile-badges">
			<div className="badge badge-program">
				<strong id="badgeProgramCount">{program}</strong>Carrera
			</div>
			<div className="badge badge-remaining">
				<strong id="badgeRemainingCount">{remaining}</strong>Restantes
			</div>
			<div className="badge badge-approved">
				<strong id="badgeApprovedCount">{approved}</strong>Aprobadas
			</div>
			<div className="badge badge-total">
				<strong id="badgeTotalCount">{total}</strong>Total
			</div>
		</div>
	);
}