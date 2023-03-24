import { NavLink } from "react-router-dom";
import { useLocaleContext } from "@context/Locale";
import { DropdownMenu } from "@containers/DropdownMenu/DropdownMenu";
import { LinkButton } from "@components/LinkButton/LinkButton";
import logotypeAvif from "@assets/brand/veranalia_logotype.avif";
import logotypeWebp from "@assets/brand/veranalia_logotype.webp";
import "./Header.scss";

export const Header = ({ dropdownMenuIsOpen, setDropdownMenuIsOpen }) => {
	const {
		es: { navBar },
	} = useLocaleContext();
	const isMobile = innerWidth < 1024;

	const openDropdownMenu = () => {
		setDropdownMenuIsOpen((prevState) => !prevState);
	};

	return (
		<header className="Header">
			{isMobile && (
				<DropdownMenu
					setDropdownMenuIsOpen={setDropdownMenuIsOpen}
					dropdownMenuIsOpen={dropdownMenuIsOpen}
				/>
			)}
			<div className="Wrapper">
				<picture className="Header-logo">
					<source
						srcSet={logotypeAvif}
						type="image/avif"
						alt="Veranalia Logotype"
					/>
					<img src={logotypeWebp} type="image/webp" alt="Veranalia Logotype" />
				</picture>
				<nav className="Header-nav">
					<ul className="Header-ul">
						{navBar.navLinks.map(
							({ id, text, path, onlyMobile }) =>
								!onlyMobile && (
									<li key={id} className="Header-li">
										<NavLink to={path}>{text}</NavLink>
									</li>
								)
						)}
					</ul>
				</nav>
				<div className="Header-content">
					<span className="Header-seeMenu">
						<LinkButton text="Ver Menú" />
					</span>
					<div className="Header-menu" onClick={openDropdownMenu}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</header>
	);
};
