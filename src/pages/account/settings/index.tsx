import Head from 'next/head';
import { Title } from '@common/title';
import { Wrapper } from '@common/wrapper';
import { LandingLayout } from '@layouts/landing';
import { Overview } from '@features/account/overview';
import { useState } from 'react';
import { Modal } from '@common/modal';
import { deleteUser } from '@services/api/user/delete';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import styles from './settings.module.scss';

const SettingsPage = () => {
	const { user, updateUserStatus } = useUserContext();
	const { push } = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [hasDeleted, setHasDeleted] = useState<boolean>(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const deleteUserRequest = async () => {
		try {
			const status = await deleteUser(user?.id as string);
			if (status >= 200 && status < 300) {
				setHasDeleted(true);
				updateUserStatus(null);
				setTimeout(() => push('/'), 2000);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<LandingLayout>
			<Head>
				<title>Account Settings | Veranalia</title>
			</Head>
			<Wrapper className={styles.wrapper}>
				<Title>Ajustes de Cuenta</Title>
				<Overview>
					<button onClick={toggleModal} className={styles.Button}>
						<Overview.Item>
							<span>Eliminar Cuenta</span>
							<span>Perderás todos tus datos, tus reseñas y tu historial de compra.</span>
						</Overview.Item>
					</button>
				</Overview>
			</Wrapper>
			{isModalOpen && (
				<Modal close={toggleModal}>
					<p className={styles.Modal_head}>Estás seguro de que quieres eliminar tu cuenta?</p>
					<p className={styles.Modal_caution}>Todos tus datos se perderán permanentemente</p>
					{hasDeleted ? (
						<span>La cuenta ha sido eliminada satisfactoriamente.</span>
					) : (
						<div className={styles.Modal_buttons}>
							<button onClick={deleteUserRequest}>Sí, quiero eliminar</button>
							<button onClick={toggleModal}>No, quiero volver</button>
						</div>
					)}
				</Modal>
			)}
		</LandingLayout>
	);
};

export default SettingsPage;
