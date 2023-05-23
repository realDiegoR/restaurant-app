import styles from './OpeningHoursItem.module.scss';

type IProps = {
	dayId: number;
	name: string;
	openingHours: string;
};

export const OpeningHoursItem = ({ dayId, name, openingHours }: IProps) => {
	const day = new Date().getDay();
	return (
		<li
			className={`${styles['OpeningHoursItem']} ${
				day === dayId ? styles['OpeningHoursItem--today'] : ''
			}`}
		>
			<p className={styles['OpeningHoursItem-day']}>{name}</p>
			<p className={styles['OpeningHoursItem-openingHours']}>{openingHours}</p>
		</li>
	);
};
