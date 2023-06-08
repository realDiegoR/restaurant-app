import Link from 'next/link';
import styles from './PopularMealItem.module.scss';

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

export const PopularMealItem = (props: IProps) => {
	return (
		<li className={styles['PopularMealItem']}>
			<picture
				className={`${styles['PopularMealItem-picture']} ${styles['PopularMealItem-picture--desktop']}`}
			>
				<source
					className={styles['PopularMealItem-image--desktop']}
					srcSet={props.img.src.avif}
					type="image/avif"
				/>
				<img
					className={styles['PopularMealItem-image--desktop']}
					src={props.img.src.webp}
					loading="lazy"
					alt={props.img.alt}
				/>
			</picture>
			<div className={styles['PopularMealItem-itemInfo']}>
				{props.isPromotion && (
					<p className={styles['PopularMealItem-promotion']}>{props.promotionText}</p>
				)}
				<picture
					className={`${styles['PopularMealItem-picture']} ${styles['PopularMealItem-picture--mobile']}`}
				>
					<source
						className={styles['PopularMealItem-image--mobile']}
						srcSet={props.img.src.avif}
						type="image/avif"
					/>
					<img
						className={styles['PopularMealItem-image--mobile']}
						src={props.img.src.webp}
						loading="lazy"
						alt={props.img.alt}
					/>
				</picture>

				<div className={styles['PopularMealItem-importantInfo']}>
					<h3 className={styles['PopularMealItem-title']}>{props.title}</h3>
					<p className={styles['PopularMealItem-price']}>${props.price}</p>
				</div>
				<p className={styles['PopularMealItem-description']}>{props.description}</p>
				<Link href="/menu" className={styles['PopularMealItem-cta']}>
					{props.callToAction}
				</Link>
			</div>
		</li>
	);
};
