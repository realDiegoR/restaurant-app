import type { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './link-button.module.scss';

type IProps = {
	children: ReactNode;
	href: string;
	type?: 'light' | 'dark';
};

export const LinkButton = ({ href = '/', children, type = 'dark' }: IProps) => {
	return (
		<Link href={href} className={classNames(styles.LinkButton, styles[type])}>
			{children}
		</Link>
	);
};
