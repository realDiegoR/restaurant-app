import { useLocaleContext } from '@context/Locale';
import { OpeningHoursItem } from '@components/Schedule/OpeningHoursItem/OpeningHoursItem';
import { DecorationDot } from '@common/DecorationDot/DecorationDot';
import { Pastelito } from '@common/Pastelito/Pastelito';
import styles from './Schedule.module.scss';

export const Schedule = () => {
	const {
		es: { schedule },
	} = useLocaleContext();
	return (
		<section className={styles['Schedule']}>
			<div className={styles['Wrapper']}>
				<h2 className={styles['Schedule-title']}>{schedule.title}</h2>
				<ul className={styles['Schedule-ul']}>
					{schedule.days.map((day) => (
						<OpeningHoursItem key={day.id} {...day} />
					))}
				</ul>
				<DecorationDot top="5vw" left="2vw" size=".75rem" />
				<DecorationDot top="72vw" right="1vw" size="1rem" />
				<Pastelito top="0rem" right="-15rem" size="70vw" />
			</div>
		</section>
	);
};
