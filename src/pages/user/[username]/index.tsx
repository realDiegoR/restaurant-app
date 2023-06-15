import { LandingLayout } from '@layouts/landing';
import { Title } from '@common/Title/Title';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import image from 'public/images/brand/veranalia_imagotype.webp';
import styles from './user.module.scss';

const UserPage = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Perfil | Veranalia</title>
			</Head>
			<main className={styles.User}>
				<Title>Tu Perfil</Title>
				<section className={styles.User_userInfo}>
					<Image
						className={styles.User_image}
						src={image.src}
						alt="Profile image"
						width={300}
						height={300}
					/>
					<h2 className={styles.User_username}>Dave</h2>
					<p className={styles.User_role}>Administrator</p>
					<p className={styles.User_timestamp}>Cliente desde Junio 2023</p>
					<button className={styles.User_editbutton}>Editar Profile</button>
				</section>
				<section className={styles.User_overview}>
					<h3 className={styles.User_title}>Resumen</h3>
					<ul className={styles.User_overview_ul}>
						<li className={styles.User_overview_item}>
							<span>Última Compra</span>
							<span>17 de abril</span>
						</li>
						<li className={styles.User_overview_item}>
							<span>Compras Totales</span>
							<span>0</span>
						</li>
						<li className={styles.User_overview_item}>
							<span>Plato Favorito</span>
							<span>Mandoca</span>
						</li>
						<li className={styles.User_overview_item}>
							<span>Reseñas Totales</span>
							<span>0</span>
						</li>
					</ul>
				</section>
				<section className={styles.User_settings}>
					<h3 className={styles.User_title}>Opciones</h3>
					<ul className={styles.User_settings_ul}>
						<li className={styles.User_settings_item}>
							<Link href="/">Historial de Compras</Link>
						</li>
						<li className={styles.User_settings_item}>
							<Link href="/">Mis Reseñas</Link>
						</li>
						<li className={styles.User_settings_item}>
							<Link href="/">Ajustes de Cuenta</Link>
						</li>
						<li className={styles.User_settings_item}>
							<Link href="/">Cerrar Sesión</Link>
						</li>
					</ul>
				</section>
			</main>
		</LandingLayout>
	);
};

export default UserPage;
