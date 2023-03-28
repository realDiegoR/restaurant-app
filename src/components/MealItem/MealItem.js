import "./MealItem.scss";
import { Icon } from "@components/Icon/Icon";

export const MealItem = ({ title, text, price, color, orientation }) => {
	const getBgColor = () => {
		if (color === "yellow") return "MealItem--yellow";
		if (color === "red") return "MealItem--red";
		return "";
	};

	const getOrientation = () => {
		if (orientation === "left") return "MealItem--left";
		return "";
	};

	return (
		<li
			className={`MealItem ${getOrientation()} ${getBgColor()} ${
				title ? "MealItem--big" : ""
			}`}
		>
			{title ? (
				<>
					<div className="MealItem-heavyInfo">
						<p className="MealItem-title">{title}</p>
						<p className="MealItem-price">${price.toFixed(2)}</p>
						<button className="MealItem-button">
							<Icon name="plus" />
						</button>
					</div>
					<p className="MealItem-text">{text}</p>
				</>
			) : (
				<>
					<p className="MealItem-text">{text}</p>
					<div className="MealItem-heavyInfo">
						<p className="MealItem-price">${price.toFixed(2)}</p>
						<button className="MealItem-button">
							<Icon name="plus" />
						</button>
					</div>
				</>
			)}
		</li>
	);
};
