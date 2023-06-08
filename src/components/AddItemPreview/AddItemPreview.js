import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocaleContext } from '@context/Locale';
import styles from './AddItemPreview.module.scss';

export const AddItemPreview = ({ itemPreview, addItem, onClose }) => {
	const {
		es: { addItemPreview },
	} = useLocaleContext();
	const [itemCount, setItemCount] = useState(1);
	const [isMounting, setIsMounting] = useState(false);
	const [hasAdded, setHasAdded] = useState(false);

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
		setHasAdded(true);
		setTimeout(() => onClose(), 2000);
	};

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
				className={`${styles['AddItemPreview']} ${
					isMounting ? styles['AddItemPreview--fade-in'] : ''
				}`}
			>
				<div className={styles['AddItemPreview-text']}>
					<h2 className={styles['AddItemPreview-title']}>{addItemPreview.title}</h2>
					<p className={styles['AddItemPreview-itemName']}>{itemPreview.title}</p>
				</div>
				<div className={styles['AddItemPreview-countInfo']}>
					<span className={styles['AddItemPreview-itemCount']}>{itemCount}</span>
					<div className={styles['AddItemPreview-itemOperators']}>
						<button
							className={styles['AddItemPreview-button']}
							onClick={sumItem}
							disabled={hasAdded}
						>
							+
						</button>
						<button
							className={styles['AddItemPreview-button']}
							onClick={substractItem}
							disabled={hasAdded}
						>
							-
						</button>
					</div>
				</div>
				<div className={styles['AddItemPreview-buttons']}>
					<span
						className={`${styles['AddItemPreview-thanks']} ${
							hasAdded ? styles['AddItemPreview-thanks--fade-in'] : ''
						}`}
					>
						{addItemPreview.success}
					</span>
					<button className={styles['AddItemPreview-cancel']} onClick={onClose}>
						{addItemPreview.cancel}
					</button>
					<button className={styles['AddItemPreview-add']} onClick={addToCart} disabled={hasAdded}>
						{addItemPreview.callToAction}
					</button>
				</div>
			</div>
		</>,
		document.getElementById('modal')
	);
};
