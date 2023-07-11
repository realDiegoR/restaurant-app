import Head from 'next/head';
import { Title } from '@common/title';
import { LandingLayout } from '@layouts/landing';
import { Wrapper } from '@common/wrapper';
import { Form } from '@common/form';
import { editUser } from '@services/api/user';
import { USER_ROLES, User, UserId } from '@interfaces/user';
import { AxiosResponse } from 'axios';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import GoBack from '@common/go-back/go-back';

type Body = Pick<User, 'name' | 'email'>;

const EditAccount = () => {
	const { updateUserStatus, user } = useUserContext();
	const { push } = useRouter();

	const requestEditUser = async (formField: Body) => {
		try {
			const requestBody = {
				...formField,
				id: user?.id as UserId,
			};
			const response = await editUser(requestBody);
			if (response.status === 200) {
				const { name, email, uuid: id } = response.data;
				const user: User = { name, email, id, role: USER_ROLES.admin, cart: [] };
				updateUserStatus(user);
				push('/account/');
			}
		} catch (err) {
			const error = err as AxiosResponse;
			if (error.status === 400) {
				throw 'Hubo un error. Intente de nuevo o vuelva más tarde.';
			}
		}
	};

	return (
		<LandingLayout>
			<Head>
				<title>Editar Usuario | Veranalia</title>
			</Head>
			<Wrapper>
				<Title>Editar Perfil</Title>
				<Form callback={requestEditUser}>
					<Form.Label>
						Nombre personal
						<Form.Text name="name" required defaultValue={user?.name} />
					</Form.Label>
					<Form.Label>
						Email
						<Form.Text name="email" required defaultValue={user?.email} />
					</Form.Label>
					<Form.Submit>Realizar Cambios</Form.Submit>
				</Form>
				<GoBack />
			</Wrapper>
		</LandingLayout>
	);
};

export default EditAccount;
