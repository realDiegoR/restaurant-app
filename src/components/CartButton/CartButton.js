import { Icon } from "@components/Icon/Icon";
import "./CartButton.scss";

export const CartButton = ({ text, openModal, itemCount }) => {
	return (
		<button type="button" className="CartButton" onClick={openModal}>
			<Icon name="cart" />
			<span className="CartButton-text">{text}</span>
			<span className="CartButton-counter">{itemCount}</span>
		</button>
	);
};
