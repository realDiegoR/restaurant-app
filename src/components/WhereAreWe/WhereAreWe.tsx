import { useLocaleContext } from '@context/Locale';
import { Location } from '@components/Location/Location';
import styles from './WhereAreWe.module.scss';
import { Wrapper } from '@common/wrapper';

export const WhereAreWe = () => {
	const {
		es: { whereAreWe },
	} = useLocaleContext();
	return (
		<section className={styles['WhereAreWe']}>
			<Wrapper>
				<h2 className={styles['WhereAreWe-title']}>{whereAreWe.title}</h2>
				<div className={styles['WhereAreWe-locations']}>
					{whereAreWe.locations.map((location) => (
						<Location key={location.id} {...location} />
					))}
				</div>
			</Wrapper>
		</section>
	);
};
