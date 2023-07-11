import { CSSProperties } from 'react';
import styles from './loading-spinner.module.scss';

export const LoadingSpinner = () => {
	return (
		<p className={styles.LoadingContent}>
			<span style={{ '--delay': '100ms' } as CSSProperties}></span>
			<span style={{ '--delay': '400ms' } as CSSProperties}></span>
			<span style={{ '--delay': '600ms' } as CSSProperties}></span>
		</p>
	);
};
