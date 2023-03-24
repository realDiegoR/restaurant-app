import { NavLink } from "react-router-dom";
import { useLocaleContext } from "@context/Locale";
import { Icon } from "@components/Icon/Icon";
import "./DropdownMenu.scss";

export const DropdownMenu = ({ setDropdownMenuIsOpen, dropdownMenuIsOpen }) => {
	const {
		es: {
			navBar: { navLinks },
		},
	} = useLocaleContext();

	const closeDropdownMenu = () => {
		setDropdownMenuIsOpen((prevState) => !prevState);
	};

	return (
		<nav
			className={`DropdownMenu ${
				dropdownMenuIsOpen ? "DropdownMenu--open" : ""
			}`}
		>
			<div className="DropdownMenu-exitButton" onClick={closeDropdownMenu}>
				<Icon name="cross" />
			</div>
			<ul className="DropdownMenu-ul">
				{navLinks.map(({ id, text, path }) => (
					<li key={id}>
						<NavLink
							to={path}
							className="DropdownMenu-li"
							onClick={closeDropdownMenu}
						>
							{text}
						</NavLink>
					</li>
				))}
			</ul>
			<div className="DropdownMenu-socialMedia">
				<Icon name="facebook" />
				<Icon name="instagram" />
			</div>
		</nav>
	);
};
