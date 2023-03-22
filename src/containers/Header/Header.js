import { DropdownMenu } from "@containers/DropdownMenu/DropdownMenu";
import logotype from "@assets/brand/veranalia_logotype.png";
import "./Header.scss";

export const Header = ({ dropdownMenuIsOpen, setDropdownMenuIsOpen }) => {
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
				<img className="Header-logo" src={logotype} alt="Veranalia Logotype" />
				<div className="Header-menu" onClick={openDropdownMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</header>
	);
};
