import Head from 'next/head';
import { LandingLayout } from '@layouts/landing';
import { Hero } from '@components/Hero/Hero';
import { WhoAreWe } from '@components/WhoAreWe/WhoAreWe';
import { WhereAreWe } from '@components/WhereAreWe/WhereAreWe';
import { Schedule } from '@components/Schedule/Schedule';
import { useLocaleContext } from '@context/Locale';
import { Section } from '@common/section';
import { Title } from '@common/title';
import { Wrapper } from '@common/wrapper';
import { PromoItem } from '@features/menu/promo-item';

const Home = () => {
	const {
		es: { mostPopular },
	} = useLocaleContext();

	return (
		<LandingLayout>
			<Head>
				<title>Veranalia</title>
			</Head>
			<Hero />
			<WhoAreWe />
			<Section>
				<Wrapper>
					<Title>Promociones</Title>
					<ul>
						{mostPopular.items.map((promo) => (
							<PromoItem key={promo.id} promotionText={mostPopular.promotionText} {...promo} />
						))}
					</ul>
				</Wrapper>
			</Section>
			<WhereAreWe />
			<Schedule />
		</LandingLayout>
	);
};

export default Home;
