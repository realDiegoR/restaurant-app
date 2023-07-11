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
import { LoadingSpinner } from '@common/loading-spinner';
import styles from './settings.module.scss';
import { UserId } from '@interfaces/user';
import GoBack from '@common/go-back/go-back';

type RequestStatus = 'error' | 'loading' | 'idle' | 'success';

const SettingsPage = () => {
	const { user, updateUserStatus } = useUserContext();
	const { push } = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [status, setStatus] = useState<RequestStatus>('idle');

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const deleteUserRequest = async () => {
		try {
			setStatus('loading');
			const status = await deleteUser(user?.id as UserId);
			if (status >= 200 && status < 300) {
				setStatus('success');
				updateUserStatus(null);
				setTimeout(() => push('/'), 2000);
			}
		} catch (err) {
			setStatus('error');
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
				<GoBack />
			</Wrapper>
			{isModalOpen && (
				<Modal close={toggleModal}>
					<p className={styles.Modal_head}>Estás seguro de que quieres eliminar tu cuenta?</p>
					<p className={styles.Modal_caution}>Todos tus datos se perderán permanentemente</p>
					{status === 'success' ? (
						<span>La cuenta ha sido eliminada satisfactoriamente.</span>
					) : (
						<div className={styles.Modal_buttons}>
							<button onClick={deleteUserRequest} disabled={status === 'loading'}>
								Sí, quiero eliminar
							</button>
							<button onClick={toggleModal}>No, quiero volver</button>
						</div>
					)}
					{status === 'loading' && <LoadingSpinner />}
					{status === 'error' && (
						<p>Hubo un error. Por favor, inténtelo de nuevo o vuelva más tarde.</p>
					)}
				</Modal>
			)}
		</LandingLayout>
	);
};

export default SettingsPage;
