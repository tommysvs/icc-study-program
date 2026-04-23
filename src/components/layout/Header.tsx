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
						<button className="header-back-button" onClick={() => onNavigate('home')}>
							Regresar
						</button>
					)}
				</div>
			</div>
		</header>
	);
}