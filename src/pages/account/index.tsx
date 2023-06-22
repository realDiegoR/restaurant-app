import { LandingLayout } from '@layouts/landing';
import { Title } from '@common/title';
import Head from 'next/head';
import Image from 'next/image';
import image from 'public/images/brand/veranalia_imagotype.webp';
import { Section } from '@features/account/section';
import { Wrapper } from '@common/wrapper';
import { logout } from 'src/services/user/logout';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LinkButton } from '@common/link-button';
import styles from './account.module.scss';
import { Settings } from '@features/account/settings';
import { Overview } from '@features/account/overview';

const UserPage = () => {
	const { push } = useRouter();
	const { isLoggedIn, user } = useUserContext();
	// const logoutCallback = async () => {
	// 	try {
	// 		await logout();
	// 		updateUserStatus(null);
	// 		push('/');
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	useEffect(() => {
		if (!isLoggedIn) {
			push('/');
		}
	}, [isLoggedIn, push]);

	return (
		<LandingLayout>
			<Head>
				<title>Perfil | Veranalia</title>
			</Head>
			<main className={styles.User}>
				<Wrapper>
					<Title>Mi Perfil</Title>
					<section className={styles.User_userInfo}>
						<Image
							className={styles.User_image}
							src={image.src}
							alt="Profile image"
							width={300}
							height={300}
						/>
						<p className={styles.User_username}>{user?.fullName}</p>
						<p className={styles.User_role}>{user?.role}</p>
						<p className={styles.User_timestamp}>Cliente desde Junio 2023</p>
						<LinkButton href="/account/edit" type="light">
							Editar Perfil
						</LinkButton>
					</section>
					<Section>
						<Title type="h2">Resumen</Title>
						<Overview>
							<Overview.Item>
								<span>Última Compra</span>
								<span>17 de abril</span>
							</Overview.Item>
							<Overview.Item>
								<span>Compras Totales</span>
								<span>0</span>
							</Overview.Item>
							<Overview.Item>
								<span>Plato Favorito</span>
								<span>Mandoca</span>
							</Overview.Item>
							<Overview.Item>
								<span>Reseñas Totales</span>
								<span>0</span>
							</Overview.Item>
						</Overview>
					</Section>
					<Section>
						<Title type="h2">Opciones</Title>
						<Settings>
							<Settings.Item href="/">Historial de Compras</Settings.Item>
							<Settings.Item href="/">Mis Reseñas</Settings.Item>
							<Settings.Item href="/">Ajustes de Cuenta</Settings.Item>
							<Settings.Item href="/logout">Cerrar Sesión</Settings.Item>
						</Settings>
					</Section>
				</Wrapper>
			</main>
		</LandingLayout>
	);
};

export default UserPage;
