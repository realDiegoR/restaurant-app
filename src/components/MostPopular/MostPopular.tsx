import { useLocaleContext } from '@context/Locale';
import { PopularMealItem } from '@components/MostPopular/PopularMealItem/PopularMealItem';
import styles from './MostPopular.module.scss';
import { Wrapper } from '@common/wrapper';

export const MostPopular = () => {
	const {
		es: { mostPopular },
	} = useLocaleContext();

	return (
		<section className={styles['MostPopular']}>
			<Wrapper className={styles['Wrapper']}>
				<h2 className={styles['MostPopular-title']}>{mostPopular.title}</h2>
				<ul className={styles['MostPopular-ul']}>
					{mostPopular.items.map((item) => (
						<PopularMealItem key={item.id} promotionText={mostPopular.promotionText} {...item} />
					))}
				</ul>
			</Wrapper>
		</section>
	);
};
