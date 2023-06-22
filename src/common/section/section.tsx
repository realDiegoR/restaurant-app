import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './section.module.scss';

interface SectionProps {
	children: ReactNode;
	bgColor?: 'yellow' | 'black' | 'transparent';
}

export const Section = ({ children, bgColor = 'transparent' }: SectionProps) => {
	return <section className={classNames(styles.Section, styles[bgColor])}>{children}</section>;
};
