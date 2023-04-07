import { Icon } from "@components/Icon/Icon";
import "./MealItem.scss";

export const MealItem = ({ color, orientation, openModal, itemInfo }) => {
	const { title, text, price } = itemInfo;

	const getModifiers = () => {
		let modifiers = "";

		if (color === "yellow") modifiers += " MealItem--yellow";
		if (color === "red") modifiers += " MealItem--red";
		if (orientation === "left") modifiers += " MealItem--left";

		return modifiers;
	};

	const openPreviewModal = () => {
		openModal({ ...itemInfo, title: title ?? text });
	};

	if (title)
		return (
			<li className={`MealItem MealItem--big ${getModifiers()}`}>
				<div className="MealItem-heavyInfo">
					<p className="MealItem-title">{title}</p>
					<p className="MealItem-price">${price.toFixed(2)}</p>
					<button onClick={openPreviewModal} className="MealItem-button">
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
				<button
					onClick={openPreviewModal}
					className="MealItem-button"
					name="Add Item"
					title="Add Item"
				>
					<Icon name="plus" />
				</button>
			</div>
		</li>
	);
};
