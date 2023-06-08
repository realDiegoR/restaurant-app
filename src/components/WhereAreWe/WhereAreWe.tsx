import { useLocaleContext } from '@context/Locale';
import { Location } from '@components/Location/Location';
import styles from './WhereAreWe.module.scss';

export const WhereAreWe = () => {
	const {
		es: { whereAreWe },
	} = useLocaleContext();
	return (
		<section className={styles['WhereAreWe']}>
			<div className={styles['Wrapper']}>
				<h2 className={styles['WhereAreWe-title']}>{whereAreWe.title}</h2>
				<div className={styles['WhereAreWe-locations']}>
					{whereAreWe.locations.map((location) => (
						<Location key={location.id} {...location} />
					))}
				</div>
			</div>
		</section>
	);
};
