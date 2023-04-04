import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocaleContext } from "../../context/Locale";
import "./AddItemPreview.scss";

export const AddItemPreview = ({ itemPreview, addItem, onClose }) => {
	const {
		es: { addItemPreview },
	} = useLocaleContext();
	const [itemCount, setItemCount] = useState(1);
	const [isMounting, setIsMounting] = useState(false);

	const sumItem = () => {
		if (itemCount === 30) return;
		setItemCount((prev) => prev + 1);
	};

	const substractItem = () => {
		if (itemCount === 1) return;
		setItemCount((prev) => prev - 1);
	};

	const addToCart = () => {
		addItem(itemPreview, itemCount);
		onClose();
	};

	useEffect(() => {
		setIsMounting(true);
	}, []);

	return createPortal(
		<>
			<div
				className={`Overlay ${isMounting ? "Overlay--fade-in" : ""}`}
				onClick={onClose}
			/>
			<div
				className={`AddItemPreview ${
					isMounting ? "AddItemPreview--fade-in" : ""
				}`}
			>
				<div className="AddItemPreview-text">
					<h2 className="AddItemPreview-title">{addItemPreview.title}</h2>
					<p className="AddItemPreview-itemName">{itemPreview.title}</p>
				</div>
				<div className="AddItemPreview-countInfo">
					<span className="AddItemPreview-itemCount">{itemCount}</span>
					<div className="AddItemPreview-itemOperators">
						<button className="AddItemPreview-button" onClick={sumItem}>
							+
						</button>
						<button className="AddItemPreview-button" onClick={substractItem}>
							-
						</button>
					</div>
				</div>
				<div className="AddItemPreview-buttons">
					<button className="AddItemPreview-add" onClick={addToCart}>
						{addItemPreview.callToAction}
					</button>
					<button className="AddItemPreview-cancel" onClick={onClose}>
						{addItemPreview.cancel}
					</button>
				</div>
			</div>
		</>,
		document.getElementById("modal")
	);
};
