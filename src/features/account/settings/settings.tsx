import { type ReactNode } from 'react';
import styles from './settings.module.scss';

interface SettingsProps {
	children: ReactNode;
}

interface ItemProps {
	children: ReactNode;
}

export const Settings = ({ children }: SettingsProps) => {
	return <ul className={styles.Settings}>{children}</ul>;
};

Settings.Item = function Item({ children }: ItemProps) {
	return <li className={styles.Item}>{children}</li>;
};
