import { Icon } from '@common/Icon/Icon';
import styles from './cart-button.module.scss';

interface CartButtonProps {
	text: string;
	openModal: () => void;
	itemCount: number;
}

export const CartButton = ({ text, openModal, itemCount }: CartButtonProps) => {
	return (
		<button type="button" className={styles['CartButton']} onClick={openModal}>
			<Icon name="cart" />
			<span className={styles['CartButton-text']}>{text}</span>
			<span className={styles['CartButton-counter']}>{itemCount}</span>
		</button>
	);
};
