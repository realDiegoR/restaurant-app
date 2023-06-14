import { MostPopular } from '@components/MostPopular/MostPopular';
import { LandingLayout } from '@layouts/landing';
import Head from 'next/head';

const PromosPage = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Promo | Veranalia</title>
			</Head>
			<MostPopular />
		</LandingLayout>
	);
};

export default PromosPage;
