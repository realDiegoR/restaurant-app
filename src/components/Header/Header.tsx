import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocaleContext } from '@context/Locale';
import { DropdownMenu } from '@components/DropdownMenu/DropdownMenu';
import { LinkButton } from '@common/LinkButton/LinkButton';
import logotypeAvif from '@assets/brand/veranalia_logotype.avif';
import logotypeWebp from '@assets/brand/veranalia_logotype.webp';
import { useDropdownMenu } from '@hooks/useDropdownMenu';
import { DropdownButton } from '@components/DropdownMenu/DropdownButton/DropdownButton';
import { Icon } from '@common/Icon/Icon';
import styles from './Header.module.scss';

export const Header = () => {
	const {
		es: { navBar },
	} = useLocaleContext();
	const dropdownMenu = useDropdownMenu();
	const { pathname } = useRouter();

	return (
		<header className={styles['Header']}>
			<div className={styles['Wrapper']}>
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
						<span className={styles['Header-seeMenu']}>
							<LinkButton href="/menu">Iniciar sesion</LinkButton>
						</span>
					)}
				</div>
			</div>
			{dropdownMenu.shouldMount && (
				<DropdownMenu toggle={dropdownMenu.toggle} isOpen={dropdownMenu.isOpen} />
			)}
		</header>
	);
};
