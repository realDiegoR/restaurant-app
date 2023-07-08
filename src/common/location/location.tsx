import { Icon } from '@common/Icon/Icon';
import styles from './location.module.scss';
import { Title } from '@common/title';

type IProps = {
	name: string;
	place: string;
	phoneNumber: string;
};

export const Location = ({ name, place, phoneNumber }: IProps) => {
	const MAPS_API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY;
	return (
		<section className={styles.Location}>
			<Title type="h3" color="yellow">
				{name}
			</Title>
			<div className={styles.data_list}>
				<div className={styles.data}>
					<Icon name="flag" />
					<p>{place}</p>
				</div>
				<div className={styles.data}>
					<Icon name="phone" />
					<p>{phoneNumber}</p>
				</div>
			</div>
			<iframe
				className={styles.map}
				title="Google Maps Location"
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=McDonalds,Marietta+Georgia&zoom=14`}
			/>
		</section>
	);
};
