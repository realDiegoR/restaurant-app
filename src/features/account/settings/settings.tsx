import { type ReactNode } from 'react';
import Link from 'next/link';
import styles from './settings.module.scss';

interface SettingsProps {
	children: ReactNode;
}

interface ItemProps {
	children: ReactNode;
	href: string;
}

export const Settings = ({ children }: SettingsProps) => {
	return <ul className={styles.Settings}>{children}</ul>;
};

Settings.Item = function Item({ href, children }: ItemProps) {
	return (
		<li className={styles.Item}>
			<Link href={href}>{children}</Link>
		</li>
	);
};
