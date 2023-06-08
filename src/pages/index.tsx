import Head from 'next/head';
import { LandingLayout } from 'layouts/landing/LandingLayout';
import { Hero } from '@components/Hero/Hero';
import { WhoAreWe } from '@components/WhoAreWe/WhoAreWe';
import { MostPopular } from '@components/MostPopular/MostPopular';
import { WhereAreWe } from '@components/WhereAreWe/WhereAreWe';
import { Schedule } from '@components/Schedule/Schedule';

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
