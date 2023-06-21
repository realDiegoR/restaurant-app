import type { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './title.module.scss';

interface TitleProps {
	type?: 'h1' | 'h2';
	children: ReactNode;
}

export const Title = ({ children, type = 'h1' }: TitleProps) => {
	return <h1 className={classNames(styles.Title, styles[type])}>{children}</h1>;
};
