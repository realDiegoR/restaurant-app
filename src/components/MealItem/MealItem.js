import { Icon } from "@components/Icon/Icon";
import "./MealItem.scss";

export const MealItem = ({ title, text, price, color, orientation }) => {
	const getModifiers = () => {
		let modifiers = "";

		if (color === "yellow") modifiers += " MealItem--yellow";
		if (color === "red") modifiers += " MealItem--red";
		if (orientation === "left") modifiers += " MealItem--left";

		return modifiers;
	};

	if (title)
		return (
			<li className={`MealItem MealItem--big ${getModifiers()}`}>
				<div className="MealItem-heavyInfo">
					<p className="MealItem-title">{title}</p>
					<p className="MealItem-price">${price.toFixed(2)}</p>
					<button className="MealItem-button">
						<Icon name="plus" />
					</button>
				</div>
				<p className="MealItem-text">{text}</p>
			</li>
		);

	return (
		<li className={`MealItem ${getModifiers()}`}>
			<p className="MealItem-text">{text}</p>
			<div className="MealItem-heavyInfo">
				<p className="MealItem-price">${price.toFixed(2)}</p>
				<button className="MealItem-button">
					<Icon name="plus" />
				</button>
			</div>
		</li>
	);
};
