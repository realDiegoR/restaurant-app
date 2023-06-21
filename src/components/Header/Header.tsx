import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocaleContext } from '@context/Locale';
import { DropdownMenu } from '@components/DropdownMenu/DropdownMenu';
import { LinkButton } from '@common/link-button';
import logotypeAvif from '@images/brand/veranalia_logotype.avif';
import logotypeWebp from '@images/brand/veranalia_logotype.webp';
import { useDropdownMenu } from '@hooks/useDropdownMenu';
import { DropdownButton } from '@components/DropdownMenu/DropdownButton/DropdownButton';
import { Icon } from '@common/Icon/Icon';
import { Wrapper } from '@common/wrapper';
import styles from './Header.module.scss';
import { useUserContext } from '@context/UserContext';

export const Header = () => {
	const {
		es: { navBar },
	} = useLocaleContext();
	const { isLogged } = useUserContext();
	const dropdownMenu = useDropdownMenu();
	const { pathname } = useRouter();

	return (
		<header className={styles['Header']}>
			<Wrapper className={styles['Wrapper']}>
				<Link href="/">
					<picture className={styles['Header-logo']}>
						<source srcSet={logotypeAvif.src} type="image/avif" />
						<img src={logotypeWebp.src} alt="Veranalia Logotype" />
					</picture>
				</Link>
				<nav className={styles['Header-nav']}>
					<ul className={styles['Header-ul']}>
						{navBar.navLinks.map(({ id, text, path }) => (
							<li
								key={id}
								className={`${styles['Header-li']} ${path === pathname ? styles['active'] : ''}`}
							>
								<Link href={path}>{text}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className={styles['Header-content']}>
					{dropdownMenu.shouldMount ? (
						<DropdownButton toggle={dropdownMenu.toggle}>
							<Icon name="hamburger" />
						</DropdownButton>
					) : (
						<>
							{isLogged ? (
								<span className={styles['Header-seeMenu']}>
									<LinkButton href={`/account`}>Mi Perfil</LinkButton>
								</span>
							) : (
								<span className={styles['Header-seeMenu']}>
									<LinkButton href="/login">Iniciar sesión</LinkButton>
								</span>
							)}
						</>
					)}
				</div>
			</Wrapper>
			{dropdownMenu.shouldMount && (
				<DropdownMenu toggle={dropdownMenu.toggle} isOpen={dropdownMenu.isOpen} />
			)}
		</header>
	);
};
