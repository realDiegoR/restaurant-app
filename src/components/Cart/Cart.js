import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocaleContext } from "../../context/Locale";
import { Icon } from "../../components/Icon/Icon";
import "./Cart.scss";

export const Cart = ({
	cartItems,
	deleteItem,
	itemCount,
	totalPrice,
	onClose,
}) => {
	const {
		es: { cart },
	} = useLocaleContext();

	const [isMounting, setIsMounting] = useState(false);
	const cartRef = useRef(null);

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
				ref={cartRef}
				className={`Cart ${isMounting ? "Cart--fade-in" : ""}`}
			>
				<div className="Cart-title">
					<span>
						<Icon name="cart" />
					</span>
					<h2>{cart.title}</h2>
				</div>
				<ul className="Cart-ul">
					{itemCount ? (
						cartItems.map((item) => (
							<li className="Cart-item" key={item.title}>
								<span className="Cart-count">{item.count}</span>
								<p className="Cart-itemText">
									{item.title}
									<span>${item.totalPrice.toFixed(2)}</span>
								</p>
								<button
									className="Cart-deleteItem"
									onClick={() => deleteItem(item.title)}
								>
									-
								</button>
							</li>
						))
					) : (
						<p className="Cart-emptyMessage">
							El carrito está vacío. <span>¿Te apetece algo?</span>
						</p>
					)}
				</ul>
				<p className="Cart-priceTotal">
					Total de la cuenta: <span>${totalPrice}</span>
				</p>
				<div className="Cart-buttons">
					<button className="Cart-goback" onClick={onClose}>
						{cart.goBack}
					</button>
					<button className="Cart-cta">{cart.callToAction}</button>
				</div>
			</div>
		</>,
		document.getElementById("modal")
	);
};
