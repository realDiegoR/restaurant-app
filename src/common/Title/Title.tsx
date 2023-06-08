import type { ReactNode } from 'react';
import styles from './title.module.scss';

interface TitleProps {
	children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
	return <h1 className={styles.Title}>{children}</h1>;
};
