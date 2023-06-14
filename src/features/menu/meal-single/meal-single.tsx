import { Icon } from '@common/Icon/Icon';
import classNames from 'classnames';
import { getMealStyle } from '../utils/get-meal-styles';
import styles from './meal-single.module.scss';
import { IMealItem } from '../meal-list';

interface MealSingleProps extends IMealItem {
	title: string;
}

export const MealSingle = ({ price, title, text, style, openModal }: MealSingleProps) => {
	const mealStyles = getMealStyle({
		css: styles,
		mealStyle: style,
		compName: 'MealSingle',
	});

	const openPreviewModal = () => {
		openModal({ price, title, units: 0 });
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
