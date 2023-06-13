import { Icon } from '@common/Icon/Icon';
import classNames from 'classnames';
import styles from './meal-list.module.scss';

const colorSet = (name: string) => ({
	1: '',
	2: styles[`${name}--yellow`],
	3: styles[`${name}--red`],
});

const orientationSet = (name: string) => ({
	end: '',
	start: styles[`${name}--left`],
});

export const MealList = ({ title, meals, style, children }: IMealCategory) => {
	const mealStyles = [
		colorSet('MealList')[style.colorSet],
		orientationSet('MealList')[style.orientation],
	];

	return (
		<section className={classNames(styles['MealList'], mealStyles)}>
			<div className={styles['Wrapper']}>
				<h2 className={styles['MealList-title']}>{title}</h2>
				<ul className={styles['MealList-ul']}>{meals.map((meal) => children(meal))}</ul>
			</div>
		</section>
	);
};

MealList.Item = function Item({ price, text, style, openModal }: IMealItem) {
	const mealStyles = [
		colorSet('MealItem')[style.colorSet],
		orientationSet('MealItem')[style.orientation],
	];

	const openPreviewModal = () => {
		openModal && openModal({ price, title: text, units: 0 });
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
