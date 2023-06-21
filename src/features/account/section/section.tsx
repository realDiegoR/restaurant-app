import { type ReactNode } from 'react';
import styles from './section.module.scss';

interface SectionProps {
	children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
	return <section className={styles.Section}>{children}</section>;
};
