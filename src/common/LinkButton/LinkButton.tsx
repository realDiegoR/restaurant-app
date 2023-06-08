import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

type IProps = {
	children: ReactNode;
	href: string;
};

export const LinkButton = ({ href = '/', children }: IProps) => {
	return (
		<Link href={href} className={styles['LinkButton']}>
			{children}
		</Link>
	);
};
