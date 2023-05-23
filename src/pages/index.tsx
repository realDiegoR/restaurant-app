import Head from 'next/head';
import { LandingLayout } from 'layouts/landing/LandingLayout';
import { Hero } from '@containers/Hero/Hero';
import { WhoAreWe } from '@containers/WhoAreWe/WhoAreWe';
import { MostPopular } from '@containers/MostPopular/MostPopular';
import { WhereAreWe } from '@containers/WhereAreWe/WhereAreWe';
import { Schedule } from '@containers/Schedule/Schedule';

const Home = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Veranalia</title>
			</Head>
			<Hero />
			<WhoAreWe />
			<MostPopular />
			<WhereAreWe />
			<Schedule />
		</LandingLayout>
	);
};

export default Home;
