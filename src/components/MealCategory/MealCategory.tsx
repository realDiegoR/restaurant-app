import classNames from 'classnames';
import styles from './MealCategory.module.scss';

export const MealCategory = ({
	title,
	meals,
	color,
	orientation,
	type = 'normal',
  children
}: IMealCategory) => {
	const getModifiers = () => {
		const modifiers = [];

		if (color && color === 'yellow') modifiers.push(styles['MealCategory--yellow']);
		if (color && color === 'red') modifiers.push(styles['MealCategory--red']);
		if (orientation && orientation === 'left') modifiers.push(styles['MealCategory--left']);

		return modifiers;
	};

	if (type === 'normal')
		return (
			<section className={classNames(styles['MealCategory'], getModifiers())}>
				<div className={styles['Wrapper']}>
					<h2 className={styles['MealCategory-title']}>{title}</h2>
					<ul className={styles['MealCategory-ul']}>
						{meals.map((meal) => children(meal.id, meal))}
					</ul>
				</div>
			</section>
		);

  return (
    <section className={classNames(styles['MealCategory'], getModifiers())}>
      <div className={styles['Wrapper']}>
        <ul className={`${styles['MealCategory-ul']} ${styles['MealCategory-ul--big']} `}>
          {meals.map((meal) => children(meal.id, meal))}
        </ul>
      </div>
    </section>
  );
};
