import { Icon } from '@common/Icon/Icon';
import classNames from 'classnames';
import styles from './meal-single.module.scss';

interface MealSingleProps extends IMealItem {
	title: string;
}

const colorSet = {
	1: '',
	2: styles['MealSingle--yellow'],
	3: styles['MealSingle--red'],
};

const orientationSet = {
	end: '',
	start: styles['MealSingle--left'],
};

export const MealSingle = ({ price, title, text, style, openModal }: MealSingleProps) => {
	const mealStyles = [colorSet[style.colorSet], orientationSet[style.orientation]];

	const openPreviewModal = () => {
		openModal && openModal({ price, title, units: 0 });
	};

	return (
		<li className={classNames(styles['MealSingle'], styles['MealSingle--big'], mealStyles)}>
			<div className={styles['MealSingle-heavyInfo']}>
				<p className={styles['MealSingle-title']}>{title}</p>
				<p className={styles['MealSingle-price']}>${price.toFixed(2)}</p>
				<button onClick={openPreviewModal} className={styles['MealSingle-button']}>
					<Icon name="plus" />
				</button>
			</div>
			<p className={styles['MealSingle-text']}>{text}</p>
		</li>
	);
};
