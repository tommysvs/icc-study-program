import type { CourseStatus } from '../types/study-program';
import type { StatusLegendItem } from '../types/ui';

export function getCourseStatusClass(status: CourseStatus): string {
	switch (status) {
		case 'Aprobado':
		case 'Suficiencia':
			return 'status-approved';
		case 'Reprobado':
			return 'status-failed';
		case 'Pendiente':
			return 'status-pending';
		case 'Cursando':
			return 'status-taking';
		default:
			return '';
	}
}

export const statusLegendItems: StatusLegendItem[] = [
	{ name: 'Aprobado', className: 'aprobado' },
	{ name: 'Reprobado', className: 'reprobado' },
	{ name: 'Cursando', className: 'cursando' },
	{ name: 'Pendiente', className: 'pendiente' },
];

