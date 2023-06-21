import { useLocaleContext } from '@context/Locale';
import { LinkButton } from '@common/link-button';
import { Icon } from '@common/Icon/Icon';
import { DecorationDot } from '@common/DecorationDot/DecorationDot';
import { Pastelito } from '@common/Pastelito/Pastelito';
import styles from './WhoAreWe.module.scss';
import { Wrapper } from '@common/wrapper';

export const WhoAreWe = () => {
	const {
		es: { whoAreWe },
	} = useLocaleContext();

	return (
		<section className={styles['WhoAreWe']}>
			<Wrapper className={styles['Wrapper']}>
				<h2 className={styles['WhoAreWe-title']}>{whoAreWe.title}</h2>
				<div className={styles['WhoAreWe-pitch']}>
					{whoAreWe.salesPitchSentences.map(({ id, text }) => (
						<p className={styles['WhoAreWe-text']} key={id}>
							{text}
						</p>
					))}
				</div>
				<LinkButton href="/menu">
					<Icon name="orderMenu" />
					{whoAreWe.callToAction}
				</LinkButton>
			</Wrapper>

			<DecorationDot bottom="55vw" right="7vw" size=".85rem" />
			<DecorationDot bottom="5.5vw" left="8vw" size=".55rem" />
			<Pastelito top="3rem" right="-21rem" size="70vw" />
		</section>
	);
};
