import { Icon } from '@common/Icon/Icon';
import classNames from 'classnames';
import styles from './MealItem.module.scss';

export const MealItem = ({ price, title, text, color, orientation, openModal }: IMealItem) => {

	const getModifiers = () => {
		const modifiers = [];

		if (color && color  === 'yellow') modifiers.push(styles['MealItem--yellow']);
		if (color && color  === 'red') modifiers.push(styles['MealItem--red']);
		if (orientation && orientation  === 'left') modifiers.push(styles['MealItem--left']);

		return modifiers;
	};

	const openPreviewModal = () => {
		openModal && openModal({ price, title: title ?? text, units: 0 });
	};

	if (title)
		return (
			<li className={classNames(styles['MealItem'], styles['MealItem--big'], getModifiers())}>
				<div className={styles['MealItem-heavyInfo']}>
					<p className={styles['MealItem-title']}>{title}</p>
					<p className={styles['MealItem-price']}>${price.toFixed(2)}</p>
					<button onClick={openPreviewModal} className={styles['MealItem-button']}>
						<Icon name="plus" />
					</button>
				</div>
				<p className={styles['MealItem-text']}>{text}</p>
			</li>
		);

	return (
		<li className={classNames(styles['MealItem'], getModifiers())}>
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
