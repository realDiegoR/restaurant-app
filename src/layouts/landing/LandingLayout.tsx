import type { ReactNode } from 'react';
import { Footer } from '@containers/Footer/Footer';
import styles from './LandingLayout.module.scss';

interface IProps {
	children: ReactNode;
}

export const LandingLayout = ({ children }: IProps) => {
	return (
		<div className={styles.LandingLayout}>
			<div>{children}</div>
			<Footer />
		</div>
	);
};
