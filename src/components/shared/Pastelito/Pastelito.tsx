import pastelitoAvif from '@assets/ui/pastelito.avif';
import pastelitoWebp from '@assets/ui/pastelito.webp';
import styles from './Pastelito.module.scss';

type IProps = {
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	size: string;
};

export const Pastelito = ({ top = '', left = '', right = '', bottom = '', size = '' }: IProps) => {
	const position = {
		top,
		left,
		right,
		bottom,
		width: size,
		height: size,
	};
	return (
		<span className={styles['Pastelito']} style={position}>
			<picture>
				<source srcSet={pastelitoAvif.src} type="image/avif" />
				<img src={pastelitoWebp.src} alt="pastelito" />
			</picture>
		</span>
	);
};
