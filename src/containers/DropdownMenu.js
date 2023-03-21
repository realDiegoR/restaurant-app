import { useGlobalContext } from "../context/Provider";
import { NavLink } from "react-router-dom";
import { Icon } from "../components/Icon";

export const DropdownMenu = ({ setDropdownMenuIsOpen, dropdownMenuIsOpen }) => {
	const {
		es: {
			navBar: { navLinks },
		},
	} = useGlobalContext();

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
						<NavLink to={path} className="DropdownMenu-li">
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
