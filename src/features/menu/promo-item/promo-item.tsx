import Link from 'next/link';
import styles from './promo-item.module.scss';

type IProps = {
	img: {
		src: {
			avif: string;
			webp: string;
		};
		alt: string;
	};
	isPromotion: boolean;
	promotionText: string;
	title: string;
	description: string;
	callToAction: string;
	price: number;
};

export const PromoItem = (props: IProps) => {
	return (
		<li className={styles['PromoItem']}>
			<picture className={`${styles['PromoItem-picture']} ${styles['PromoItem-picture--desktop']}`}>
				<source
					className={styles['PromoItem-image--desktop']}
					srcSet={props.img.src.avif}
					type="image/avif"
				/>
				<img
					className={styles['PromoItem-image--desktop']}
					src={props.img.src.webp}
					loading="lazy"
					alt={props.img.alt}
				/>
			</picture>
			<div className={styles['PromoItem-itemInfo']}>
				{props.isPromotion && (
					<p className={styles['PromoItem-promotion']}>{props.promotionText}</p>
				)}
				<picture
					className={`${styles['PromoItem-picture']} ${styles['PromoItem-picture--mobile']}`}
				>
					<source
						className={styles['PromoItem-image--mobile']}
						srcSet={props.img.src.avif}
						type="image/avif"
					/>
					<img
						className={styles['PromoItem-image--mobile']}
						src={props.img.src.webp}
						loading="lazy"
						alt={props.img.alt}
					/>
				</picture>

				<div className={styles['PromoItem-importantInfo']}>
					<h3 className={styles['PromoItem-title']}>{props.title}</h3>
					<p className={styles['PromoItem-price']}>${props.price}</p>
				</div>
				<p className={styles['PromoItem-description']}>{props.description}</p>
				<Link href="/menu" className={styles['PromoItem-cta']}>
					{props.callToAction}
				</Link>
			</div>
		</li>
	);
};
