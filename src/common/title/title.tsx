import type { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './title.module.scss';

interface TitleProps {
	type?: 'h1' | 'h2';
	children: ReactNode;
	color?: 'yellow' | 'white';
}

export const Title = ({ children, type = 'h1', color = 'white' }: TitleProps) => {
	return <h1 className={classNames(styles.Title, styles[type], styles[color])}>{children}</h1>;
};
