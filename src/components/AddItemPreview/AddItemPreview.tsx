import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocaleContext } from '@context/Locale';
import styles from './AddItemPreview.module.scss';

interface AddItemPreviewProps {
	item: ICartItem;
	addItem: (item: ICartItem, units: number) => void;
	onClose: () => void;
}

export const AddItemPreview = ({ item, addItem, onClose }: AddItemPreviewProps) => {
	const {
		es: { addItemPreview },
	} = useLocaleContext();
	const [itemCount, setItemCount] = useState<number>(1);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [hasAdded, setHasAdded] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement | null>(null);

	const sumItem = () => {
		if (itemCount === 30) return;
		setItemCount((prev) => prev + 1);
	};

	const substractItem = () => {
		if (itemCount === 1) return;
		setItemCount((prev) => prev - 1);
	};

	const addToCart = () => {
		addItem(item, itemCount);
		setHasAdded(true);
		setTimeout(() => onClose(), 2000);
	};

	useEffect(() => {
		modalRef.current = document.querySelector('#modal');
		setIsMounted(true);
	}, []);

	if (modalRef.current)
		return createPortal(
			<>
				<div
					className={`${styles['Overlay']} ${isMounted ? styles['Overlay--fade-in'] : ''}`}
					onClick={onClose}
				/>
				<div
					className={`${styles['AddItemPreview']} ${
						isMounted ? styles['AddItemPreview--fade-in'] : ''
					}`}
				>
					<div className={styles['AddItemPreview-text']}>
						<h2 className={styles['AddItemPreview-title']}>{addItemPreview.title}</h2>
						<p className={styles['AddItemPreview-itemName']}>{item.title}</p>
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
						<button
							className={styles['AddItemPreview-add']}
							onClick={addToCart}
							disabled={hasAdded}
						>
							{addItemPreview.callToAction}
						</button>
					</div>
				</div>
			</>,
			modalRef.current
		);

	return null;
};
