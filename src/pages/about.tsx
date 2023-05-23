import Head from 'next/head';
import { LandingLayout } from 'layouts/landing/LandingLayout';
import { WhoAreWe } from '@containers/WhoAreWe/WhoAreWe';

const About = () => {
	return (
		<LandingLayout>
			<Head>
				<title>About | Veranalia</title>
			</Head>
			<WhoAreWe />
		</LandingLayout>
	);
};

export default About;
