import { Icon } from '@common/Icon/Icon';
import classNames from 'classnames';
import { getMealStyle } from '../utils/get-meal-styles';
import styles from './meal-list.module.scss';
export interface IMealItem {
	id: string;
	price: number;
	text: string;
	style: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
	openModal: (item: ICartItem) => void;
}
interface MealListProps {
	title?: string;
	children: import('react').ReactNode;
	style: {
		colorSet: 1 | 2 | 3;
		orientation: 'start' | 'end';
	};
}

export const MealList = ({ title, style, children }: MealListProps) => {
	const mealStyles = getMealStyle({
		css: styles,
		mealStyle: style,
		compName: 'MealList',
	});

	return (
		<section className={classNames(styles['MealList'], mealStyles)}>
			<div className={styles['Wrapper']}>
				<h2 className={styles['MealList-title']}>{title}</h2>
				<ul className={styles['MealList-ul']}>{children}</ul>
			</div>
		</section>
	);
};

MealList.Item = function Item({ price, text, style, openModal }: IMealItem) {
	const mealStyles = getMealStyle({
		css: styles,
		mealStyle: style,
		compName: 'MealItem',
	});

	const openPreviewModal = () => {
		openModal({ price, title: text, units: 0 });
	};

	return (
		<li className={classNames(styles['MealItem'], mealStyles)}>
			<p className={styles['MealItem-text']}>{text}</p>
			<div className={styles['MealItem-heavyInfo']}>
				<p className={styles['MealItem-price']}>${price.toFixed(2)}</p>
				<button
					onClick={openPreviewModal}
					className={styles['MealItem-button']}
					name="Add Item"
					title="Add Item"
				>
					<Icon name="plus" />
				</button>
			</div>
		</li>
	);
};
