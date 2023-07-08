import Head from 'next/head';
import { LandingLayout } from '@layouts/landing';
import { DecorationDot } from '@common/DecorationDot/DecorationDot';
import { Icon } from '@common/Icon/Icon';
import { Location } from '@common/location';
import { Pastelito } from '@common/Pastelito/Pastelito';
import { useLocaleContext } from '@context/Locale';
import { LinkButton } from '@common/link-button';
import { Section } from '@common/section';
import { Title } from '@common/title';
import { Wrapper } from '@common/wrapper';
import styles from './about.module.scss';
import { OpeningHoursItem } from '@common/OpeningHoursItem/OpeningHoursItem';

const About = () => {
	const {
		es: { whoAreWe, whereAreWe, schedule },
	} = useLocaleContext();

	return (
		<LandingLayout>
			<Head>
				<title>About | Veranalia</title>
			</Head>
			<main>
				<Wrapper>
					<Title>Sobre nosotros</Title>
				</Wrapper>
				<Section>
					<Wrapper className={styles.wrapper}>
						<Title type="h2">{whoAreWe.title}</Title>
						<div>
							{whoAreWe.salesPitchSentences.map(({ id, text }) => (
								<p className={styles.text} key={id}>
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
				</Section>

				<Section bgColor="black">
					<Wrapper className={styles.wrapper}>
						<Title type="h2" color="yellow">
							{whereAreWe.title}
						</Title>
						<div className={styles.locations}>
							{whereAreWe.locations.map((location) => (
								<Location key={location.id} {...location} />
							))}
						</div>
					</Wrapper>
				</Section>

				<Section>
					<Wrapper className={styles.wrapper}>
						<Title type="h2">{schedule.title}</Title>
						<ul className={styles.list}>
							{schedule.days.map((day) => (
								<OpeningHoursItem key={day.id} {...day} />
							))}
						</ul>
						<DecorationDot top="5vw" left="2vw" size=".75rem" />
						<DecorationDot top="72vw" right="1vw" size="1rem" />
						<Pastelito top="0rem" right="-15rem" size="70vw" />
					</Wrapper>
				</Section>
			</main>
		</LandingLayout>
	);
};

export default About;
