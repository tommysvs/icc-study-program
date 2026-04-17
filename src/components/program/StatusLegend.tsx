import { statusLegendItems } from '../../utils/status';

export function StatusLegend() {
	return (
		<div className="status-indicators">
			{statusLegendItems.map((item) => (
				<div key={item.name} className={`status-indicator status-indicator-${item.className}`}>
					<div className="status-indicator-color" />
					<span>{item.name}</span>
				</div>
			))}
		</div>
	);
}