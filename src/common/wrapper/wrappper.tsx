import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './wrapper.module.scss';

interface WrapperProps {
	children: ReactNode;
	className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
	return <div className={classNames(styles.Wrapper, className)}>{children}</div>;
};
