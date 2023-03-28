import { useLocaleContext } from "@context/Locale";
import { Icon } from "@components/Icon/Icon";
import "./CartButton.scss";

export const CartButton = () => {
	const {
		es: { foodMenu },
	} = useLocaleContext();
	return (
		<button type="button" className="CartButton">
			<Icon name="cart" />
			<span className="CartButton-text">{foodMenu.cartButtonText}</span>
			<span className="CartButton-counter">0</span>
		</button>
	);
};
