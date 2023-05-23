import { useEffect, useState } from 'react';

export const useDropdownMenu = () => {
	const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState<boolean>(false);
	const [isMobileDevice, setIsMobileDevice] = useState<boolean | null>(null);

	const toggleDropdownMenu = () => {
		setDropdownMenuIsOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const mql = window.matchMedia('(max-width: 1024px)');

		const mountDropdowMenu = () => {
			const mobileMatch = mql.matches;
			console.log(mobileMatch);
			setIsMobileDevice(mobileMatch);
		};

		mountDropdowMenu();
		mql.addEventListener('change', mountDropdowMenu);
		return () => mql.removeEventListener('change', mountDropdowMenu);
	}, []);

	const dropdownMenu = {
		shouldMount: isMobileDevice,
		isOpen: dropdownMenuIsOpen,
		toggle: toggleDropdownMenu,
	};

	return dropdownMenu;
};
