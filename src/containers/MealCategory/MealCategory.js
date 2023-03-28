import { MealItem } from "@components/MealItem/MealItem";
import "./MealCategory.scss";

export const MealCategory = ({
	title,
	meals,
	color,
	orientation,
	type = "normal",
}) => {
	const getModifiers = () => {
		let modifiers = "";

		if (color === "yellow") modifiers += " MealCategory--yellow";
		if (color === "red") modifiers += " MealCategory--red";
		if (orientation === "left") modifiers += " MealCategory--left";

		return modifiers;
	};

	if (type === "normal")
		return (
			<section className={`MealCategory ${getModifiers()} `}>
				<div className="Wrapper">
					<h2 className="MealCategory-title">{title}</h2>
					<ul className="MealCategory-ul">
						{meals.map((meal) => (
							<MealItem
								key={meal.id}
								{...meal}
								color={color}
								orientation={orientation}
							/>
						))}
					</ul>
				</div>
			</section>
		);

	if (type === "expanded")
		return (
			<section className={`MealCategory ${getModifiers()}`}>
				<div className="Wrapper">
					<ul className="MealCategory-ul MealCategory-ul--big">
						{meals.map((meal) => (
							<MealItem
								key={meal.id}
								{...meal}
								title={title}
								color={color}
								orientation={orientation}
							/>
						))}
					</ul>
				</div>
			</section>
		);
};
