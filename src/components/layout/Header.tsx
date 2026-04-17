export function Header() {
	const baseUrl = import.meta.env.BASE_URL;

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
			</div>
		</header>
	);
}