import type { ReactNode } from 'react';
import { Footer } from '@components/Footer/Footer';
import styles from './landing-layout.module.scss';

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
