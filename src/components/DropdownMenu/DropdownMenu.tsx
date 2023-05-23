import Link from 'next/link';
import { useLocaleContext } from '@context/Locale';
import { Icon } from '@components/shared/Icon/Icon';
import { DropdownButton } from '@components/DropdownMenu/DropdownButton/DropdownButton';
import styles from './DropdownMenu.module.scss';

type IProps = {
	toggle: () => void;
	isOpen: boolean;
};

export const DropdownMenu = ({ toggle, isOpen }: IProps) => {
	const {
		es: {
			navBar: { navLinks },
		},
	} = useLocaleContext();

	return (
		<nav className={`${styles.DropdownMenu} ${isOpen ? styles['DropdownMenu--open'] : ''}`}>
			<DropdownButton toggle={toggle}>
				<Icon name="cross" />
			</DropdownButton>
			<ul className={styles['DropdownMenu-ul']}>
				{navLinks.map(({ id, text, path }) => (
					<li key={id}>
						<Link href={path} className={styles['DropdownMenu-li']} onClick={toggle}>
							{text}
						</Link>
					</li>
				))}
			</ul>
			<ul className={styles['DropdownMenu-socialMedia']}>
				<li className={styles['DropdownMenu-icon']}>
					<Icon name="facebook" />
				</li>
				<li className={styles['DropdownMenu-icon']}>
					<Icon name="instagram" />
				</li>
			</ul>
		</nav>
	);
};
