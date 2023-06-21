import Head from 'next/head';
import { LandingLayout } from '@layouts/landing';
import { Title } from '@common/Title/Title';
import { LinkButton } from '@common/link-button/';
import { Review } from '@features/review/review';
import fakeImg from '@images/brand/veranalia_imagotype.webp';
import style from './reviews.module.scss';
import { Wrapper } from '@common/wrapper';

const ReviewsPage = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Reseñas | Veranalia</title>
			</Head>
			<main>
				<Wrapper className={style.main}>
					<Title>Reseñas</Title>
					<p className={style.text}>
						Te gustó nuestro servicio Agradecemos tu reseña sobre nosotros. Cuéntanos, qué te gustó
						más?
					</p>
					<LinkButton href="/reviews/post">Escribir reseña</LinkButton>
					<section className={style['reviews-container']}>
						<Review
							username="Diego"
							userImg={fakeImg.src}
							rating={3}
							date={new Date()}
							content={'skeeeereeeeee'}
						/>
						<Review
							username="Mafer"
							userImg={fakeImg.src}
							rating={5}
							date={new Date()}
							content={'me gusto mucho la comida, estaba muy fancy'}
						/>
					</section>
				</Wrapper>
			</main>
		</LandingLayout>
	);
};

export default ReviewsPage;
