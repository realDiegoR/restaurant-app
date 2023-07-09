import Link from 'next/link';
import { useLocaleContext } from '@context/Locale';
import { Icon } from '@common/Icon/Icon';
import { DropdownButton } from '@components/DropdownMenu/DropdownButton/DropdownButton';
import styles from './DropdownMenu.module.scss';
import { LinkButton } from '@common/link-button';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
	const { isLoggedIn } = useUserContext();
	const { asPath } = useRouter();

	useEffect(() => {
		isOpen && toggle();
	}, [asPath]);

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
			{isLoggedIn ? (
				<LinkButton type="light" href="/account">
					Ver Perfil
				</LinkButton>
			) : (
				<>
					<LinkButton type="light" href="/login">
						Iniciar Sesión
					</LinkButton>
					<LinkButton type="light" href="/signup">
						Crear cuenta
					</LinkButton>
				</>
			)}
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
