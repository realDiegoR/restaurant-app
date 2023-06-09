import { LandingLayout } from '@layouts/landing';
import { Title } from '@common/title';
import Head from 'next/head';
import { Section } from '@features/account/section';
import { Wrapper } from '@common/wrapper';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LinkButton } from '@common/link-button';
import { Settings } from '@features/account/settings';
import { Overview } from '@features/account/overview';
import styles from './account.module.scss';
import Link from 'next/link';

const UserPage = () => {
	const { push } = useRouter();
	const { isLoggedIn, user, updateUserStatus } = useUserContext();

	const logout = async () => {
		await push('/');
		updateUserStatus(null);
	};

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
						<div className={styles.User_image}></div>
						<p className={styles.User_username}>{user?.name}</p>
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
							<Settings.Item>
								<button>Historial de Compras</button>
							</Settings.Item>
							<Settings.Item>
								<button>Mis Reseñas</button>
							</Settings.Item>
							<Settings.Item>
								<Link href="/account/settings">Ajustes de Cuenta</Link>
							</Settings.Item>
							<Settings.Item>
								<button onClick={logout}>Cerrar Sesión</button>
							</Settings.Item>
						</Settings>
					</Section>
				</Wrapper>
			</main>
		</LandingLayout>
	);
};

export default UserPage;
