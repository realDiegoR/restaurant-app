import { useRouter } from 'next/router';
import styles from './go-back.module.scss';
import classNames from 'classnames';

type GoBackProps = {
	color?: 'black' | 'white';
};
const GoBack = ({ color = 'white' }: GoBackProps) => {
	const { back } = useRouter();

	return (
		<button className={classNames(styles.button, styles[color])} onClick={back}>
			Go Back
		</button>
	);
};

export default GoBack;
