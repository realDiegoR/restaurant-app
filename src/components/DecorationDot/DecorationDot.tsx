import { Icon } from '@components/shared/Icon/Icon';
import styles from './DecorationDot.module.scss';

type IProps = {
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	size: string;
};

export const DecorationDot = ({
	top = '',
	left = '',
	right = '',
	bottom = '',
	size = '',
}: IProps) => {
	const position = {
		top,
		left,
		right,
		bottom,
		width: size,
		height: size,
	};

	return (
		<span className={styles.DecorationBall} style={position}>
			<Icon name="ball" />
		</span>
	);
};
