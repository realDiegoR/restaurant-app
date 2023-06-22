import { Section } from '@common/section';
import { Title } from '@common/title';
import { LandingLayout } from '@layouts/landing';
import Head from 'next/head';
import { Wrapper } from '@common/wrapper';
import { useLocaleContext } from '@context/Locale';
import { PromoItem } from '@features/menu/promo-item';
import styles from './promo.module.scss';

const PromosPage = () => {
	const {
		es: { mostPopular },
	} = useLocaleContext();

	return (
		<LandingLayout bgColor="black">
			<Head>
				<title>Promo | Veranalia</title>
			</Head>
			<Section>
				<Wrapper className={styles.Wrapper}>
					<Title color="yellow">Promociones</Title>
					<ul>
						{mostPopular.items.map((promo) => (
							<PromoItem key={promo.id} promotionText={mostPopular.promotionText} {...promo} />
						))}
					</ul>
				</Wrapper>
			</Section>
		</LandingLayout>
	);
};

export default PromosPage;
