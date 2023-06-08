import { Icon } from '@common/Icon/Icon';
import { useLocaleContext } from '@context/Locale';
// import logotypeAvif from '@assets/brand/veranalia_logotype.avif';
// import logotypeWebp from '@assets/brand/veranalia_logotype.webp';
import styles from './Footer.module.scss';

export const Footer = () => {
	const {
		es: { footer },
	} = useLocaleContext();

	return (
		<footer className={styles['Footer']}>
			<div className={styles['Wrapper']}>
				<section className={styles['Footer-section']}>
					<h2>{footer.followUs.title}</h2>
					<ul className={styles['Footer-links']}>
						{footer.followUs.icons.map((icon) => (
							<li key={icon.id}>
								<Icon name={icon.name} />
							</li>
						))}
					</ul>
				</section>
				<section className={styles['Footer-section']}>
					<h2>{footer.rateUs.title}</h2>
					<ul className={styles['Footer-links']}>
						{footer.rateUs.icons.map((icon) => (
							<li key={icon.id}>
								<Icon name={icon.name} />
							</li>
						))}
					</ul>
				</section>
			</div>

			<p className={styles['Footer-signature']}>{footer.lovelyNote}</p>
		</footer>
	);
};
