import Head from 'next/head';
import { LandingLayout } from 'layouts/landing/LandingLayout';
import { WhoAreWe } from '@components/WhoAreWe/WhoAreWe';
import { WhereAreWe } from '@components/WhereAreWe/WhereAreWe';
import { Schedule } from '@components/Schedule/Schedule';

const About = () => {
	return (
		<LandingLayout>
			<Head>
				<title>About | Veranalia</title>
			</Head>
			<WhoAreWe />
			<WhereAreWe />
			<Schedule />
		</LandingLayout>
	);
};

export default About;
