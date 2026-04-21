type PageType = 'home' | 'program' | 'timeline';

interface HeaderProps {
	currentPage: PageType;
	onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
	const baseUrl = import.meta.env.BASE_URL;
	const showBackButton = currentPage !== 'home';

	return (
		<header>
			<div className="header-container">
				<div className="header-left">
					<img src={`${baseUrl}img/logo-unicah.svg`} alt="Logo UNICAH" className="logo" />
				</div>
				<div className="header-center">
					<h1>ICC</h1>
					<p>Ingeniería en Ciencias de la Computación</p>
				</div>
				<div className="header-right">
					{showBackButton && (
						<button
							onClick={() => onNavigate('home')}
							style={{
								background: 'rgba(255, 255, 255, 0.1)',
								border: '1px solid rgba(255, 255, 255, 0.2)',
								color: 'white',
								borderRadius: '6px',
								cursor: 'pointer',
								padding: '0.5rem 1rem',
								fontSize: '0.9rem',
								fontWeight: 500,
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
								e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
								e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
							}}
						>
							Regresar
						</button>
					)}
				</div>
			</div>
		</header>
	);
}