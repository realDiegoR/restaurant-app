import type { ICartItem } from '@interfaces/cart';
import { useState } from 'react';
import { useLocaleContext } from '@context/Locale';
import { Modal } from '@common/modal';
import styles from './add-item-preview.module.scss';

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
	const [hasAdded, setHasAdded] = useState<boolean>(false);

	const sumItem = () => {
		if (itemCount === 30) return;
		setItemCount((prev) => prev + 1);
	};

	const subtractItem = () => {
		if (itemCount === 1) return;
		setItemCount((prev) => prev - 1);
	};

	const addToCart = () => {
		addItem(item, itemCount);
		setHasAdded(true);
		setTimeout(() => onClose(), 2000);
	};

	return (
		<Modal close={onClose}>
			<div className={styles['AddItemPreview-text']}>
				<h2 className={styles['AddItemPreview-title']}>{addItemPreview.title}</h2>
				<p className={styles['AddItemPreview-itemName']}>{item.title}</p>
			</div>
			<div className={styles['AddItemPreview-countInfo']}>
				<span className={styles['AddItemPreview-itemCount']}>{itemCount}</span>
				<div className={styles['AddItemPreview-itemOperators']}>
					<button className={styles['AddItemPreview-button']} onClick={sumItem} disabled={hasAdded}>
						+
					</button>
					<button
						className={styles['AddItemPreview-button']}
						onClick={subtractItem}
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
		</Modal>
	);
};
