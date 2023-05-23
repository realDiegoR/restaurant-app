import type { ReactNode } from 'react';
import styles from './DropwdownButton.module.scss';

type IProps = {
	children: ReactNode;
	toggle: () => void;
};

export const DropdownButton = ({ toggle, children }: IProps): JSX.Element => {
	return (
		<button type="button" className={styles['DropdownButton']} onClick={toggle}>
			{children}
		</button>
	);
};
