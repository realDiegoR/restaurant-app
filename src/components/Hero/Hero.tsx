import { DecorationDot } from '@common/DecorationDot/DecorationDot';
import backgroundMobileAvif from '@images/ui/hero_mobile.avif';
import backgroundMobileWebp from '@images/ui/hero_mobile.webp';
import backgroundTabletAvif from '@images/ui/hero_tablet.avif';
import backgroundTabletWebp from '@images/ui/hero_tablet.webp';
import backgroundDesktopAvif from '@images/ui/hero_desktop.avif';
import backgroundDesktopWebp from '@images/ui/hero_desktop.webp';
import imagotypeAvif from '@images/brand/veranalia_imagotype.avif';
import imagotypeWebp from '@images/brand/veranalia_imagotype.webp';
import styles from './Hero.module.scss';

export const Hero = () => {
	return (
		<section className={styles['Hero']}>
			<div className={styles['Hero-content']}>
				<picture>
					<source
						srcSet={backgroundMobileAvif.src}
						className={styles['Hero-backgroundImage']}
						media="(max-width: 600px)"
						type="image/avif"
					/>
					<source
						srcSet={backgroundMobileWebp.src}
						className={styles['Hero-backgroundImage']}
						media="(max-width: 600px)"
						type="image/webp"
					/>
					<source
						srcSet={backgroundTabletAvif.src}
						className={styles['Hero-backgroundImage']}
						media="(max-width: 1024px)"
						type="image/avif"
					/>
					<source
						srcSet={backgroundTabletWebp.src}
						className={styles['Hero-backgroundImage']}
						media="(max-width: 1024px)"
						type="image/webp"
					/>
					<source
						srcSet={backgroundDesktopAvif.src}
						className={`${styles['Hero-backgroundImage']} ${styles['Hero-backgroundImage--desktop']}`}
						media="(min-width: 1024px)"
						type="image/avif"
					/>
					<img
						src={backgroundDesktopWebp.src}
						className={`${styles['Hero-backgroundImage']} ${styles['Hero-backgroundImage--desktop']}`}
						alt="hero background"
					/>
				</picture>
				<div className={styles['Hero-brand']}>
					<picture className={styles['Hero-imagotype']}>
						<source srcSet={imagotypeAvif.src} type="image/avif" />
						<img src={imagotypeWebp.src} alt="Veranalia" />
					</picture>
					<h1 className={styles['Hero-slogan']}>Si es Veranalia, es bueno!</h1>
				</div>
			</div>
			<DecorationDot bottom="45vw" left="60vw" size=".75rem" />
			<DecorationDot bottom="8vw" left="32vw" size=".75rem" />
		</section>
	);
};
