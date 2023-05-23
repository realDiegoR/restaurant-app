import { useLocaleContext } from '@context/Locale';
import { PopularMealItem } from '@components/PopularMealItem/PopularMealItem';
import styles from './MostPopular.module.scss';

export const MostPopular = () => {
	const {
		es: { mostPopular },
	} = useLocaleContext();

	return (
		<section className={styles['MostPopular']}>
			<div className={styles['Wrapper']}>
				<h2 className={styles['MostPopular-title']}>{mostPopular.title}</h2>
				<ul className={styles['MostPopular-ul']}>
					{mostPopular.items.map((item) => (
						<PopularMealItem key={item.id} promotionText={mostPopular.promotionText} {...item} />
					))}
				</ul>
			</div>
		</section>
	);
};
