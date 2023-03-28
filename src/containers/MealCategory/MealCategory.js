import { MealItem } from "@components/MealItem/MealItem";
import "./MealCategory.scss";

export const MealCategory = ({ title, meals, color, orientation }) => {
	const getBgColor = () => {
		if (color === "yellow") return "MealCategory--yellow";
		if (color === "red") return "MealCategory--red";
		return "";
	};

	const getOrientation = () => {
		if (orientation === "left") return "MealCategory--left";
		return "";
	};

	return (
		<section className={`MealCategory ${getBgColor()} ${getOrientation()}`}>
			<div className="Wrapper">
				<h2 className="MealCategory-title">{title}</h2>
				<ul
					className={`MealCategory-ul ${
						meals[0].title ? "MealCategory-ul--big" : ""
					}`}
				>
					{meals?.map((meal) => (
						<MealItem
							key={meal.id}
							{...meal}
							color={color ?? meal.color}
							orientation={orientation ?? meal.orientation}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};
