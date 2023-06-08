import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocaleContext } from '@context/Locale';
import { Icon } from '@common/Icon/Icon';
import styles from './Cart.module.scss';

export const Cart = ({ cartItems, deleteItem, itemCount, totalPrice, onClose }) => {
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
				className={`${styles['Overlay']} ${isMounting ? styles['Overlay--fade-in'] : ''}`}
				onClick={onClose}
			/>
			<div
				ref={cartRef}
				className={`${styles['Cart']} ${isMounting ? styles['Cart--fade-in'] : ''}`}
			>
				<div className={styles['Cart-title']}>
					<span>
						<Icon name="cart" />
					</span>
					<h2>{cart.title}</h2>
				</div>
				<ul className={styles['Cart-ul']}>
					{itemCount ? (
						cartItems.map((item) => (
							<li className={styles['Cart-item']} key={item.title}>
								<span className={styles['Cart-count']}>{item.count}</span>
								<p className={styles['Cart-itemText']}>
									{item.title}
									<span>${item.totalPrice.toFixed(2)}</span>
								</p>
								<button
									className={styles['Cart-deleteItem']}
									onClick={() => deleteItem(item.title)}
								>
									-
								</button>
							</li>
						))
					) : (
						<p className={styles['Cart-emptyMessage']}>
							El carrito está vacío. <span>¿Te apetece algo?</span>
						</p>
					)}
				</ul>
				<p className={styles['Cart-priceTotal']}>
					Total de la cuenta: <span>${totalPrice}</span>
				</p>
				<div className={styles['Cart-buttons']}>
					<button className={styles['Cart-goback']} onClick={onClose}>
						{cart.goBack}
					</button>
					<button className={styles['Cart-cta']}>{cart.callToAction}</button>
				</div>
			</div>
		</>,
		document.getElementById('modal')
	);
};
