import { Icon } from '@common/Icon/Icon';
import styles from './CartButton.module.scss';

export const CartButton = ({ text, openModal, itemCount }) => {
	return (
		<button type="button" className={styles['CartButton']} onClick={openModal}>
			<Icon name="cart" />
			<span className={styles['CartButton-text']}>{text}</span>
			<span className={styles['CartButton-counter']}>{itemCount}</span>
		</button>
	);
};
