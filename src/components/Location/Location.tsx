import { Icon } from '@components/shared/Icon/Icon';
import styles from './Location.module.scss';

type IProps = {
	name: string;
	place: string;
	phoneNumber: string;
};

export const Location = ({ name, place, phoneNumber }: IProps) => {
	const MAPS_API_KEY = process.env.MAPS_API_KEY;
	return (
		<section className={styles['Location']}>
			<h3 className={styles['Location-name']}>{name}</h3>
			<div className={styles['Location-infoContainer']}>
				<div className={styles['Location-contactInfo']}>
					<Icon name="flag" />
					<p>{place}</p>
				</div>
				<div className={styles['Location-contactInfo']}>
					<Icon name="phone" />
					<p>{phoneNumber}</p>
				</div>
			</div>
			<iframe
				className={styles['Location-map']}
				title="Google Maps Location"
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=McDonalds,Marietta+Georgia&zoom=14`}
			/>
		</section>
	);
};
