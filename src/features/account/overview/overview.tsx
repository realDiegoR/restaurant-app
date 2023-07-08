import { type ReactNode } from 'react';
import styles from './overview.module.scss';

interface OverviewProps {
	children: ReactNode;
}

interface ItemProps {
	children: ReactNode;
}

export const Overview = ({ children }: OverviewProps) => {
	return <ul className={styles.Overview}>{children}</ul>;
};

Overview.Item = function Item({ children }: ItemProps) {
	return <li className={styles.Item}>{children}</li>;
};
