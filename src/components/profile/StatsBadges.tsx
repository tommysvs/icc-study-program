interface StatsBadgesProps {
	approved: number;
	remaining: number;
	inProgress: number;
	total: number;
}

export function StatsBadges({ approved, remaining, inProgress, total }: StatsBadgesProps) {
	return (
		<div className="profile-badges-wrapper">
			<p className="profile-badges-note">El pensum completo contempla 60 clases.</p>

			<div className="profile-badges">
				<div className="badge badge-approved">
					<strong id="badgeApprovedCount">{approved}</strong>Aprobadas
				</div>
				<div className="badge badge-remaining">
					<strong id="badgeRemainingCount">{remaining}</strong>Restantes
				</div>
				<div className="badge badge-in-progress">
					<strong id="badgeInProgressCount">{inProgress}</strong>Cursando
				</div>
				<div className="badge badge-total">
					<strong id="badgeTotalCount">{total}</strong>Total
				</div>
			</div>
		</div>
	);
}