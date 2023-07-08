import type { ReactNode } from 'react';
import { Footer } from '@components/Footer/Footer';
import classNames from 'classnames';
import styles from './landing-layout.module.scss';

interface IProps {
	children: ReactNode;
	bgColor?: 'yellow' | 'black';
}

export const LandingLayout = ({ children, bgColor = 'yellow' }: IProps) => {
	return (
		<div className={classNames(styles.LandingLayout, styles[bgColor])}>
			<div>{children}</div>
			<Footer />
		</div>
	);
};
