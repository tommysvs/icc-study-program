type PageType = 'program' | 'timeline';

interface HomePageProps {
	onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
	return (
		<div className="home-wrapper">
			<section className="home-section">
				<h2>Bienvenido</h2>
				<p>Selecciona una opción para comenzar</p>
				
				<div className="menu-cards">
					<button
						onClick={() => onNavigate('program')}
						className="menu-card-button"
					>
						<h3>Plan de estudio</h3>
						<p>Ve todos los cursos de tu carrera</p>
					</button>
					
					<button
						onClick={() => onNavigate('timeline')}
						className="menu-card-button"
					>
						<h3>Progreso académico</h3>
						<p>Revisa tu progreso año a año</p>
					</button>
				</div>
			</section>
		</div>
	);
}