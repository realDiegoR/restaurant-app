import Head from 'next/head';
import { type AxiosResponse } from 'axios';
import { LandingLayout } from '@layouts/landing';
import { Title } from '@common/title';
import { Form } from '@common/form';
import { Wrapper } from '@common/wrapper';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import { ExpectedBody, login } from 'src/services/api/user/login';
import { USER_ROLES, User } from '@interfaces/user';

const Login = () => {
	const { push } = useRouter();
	const { updateUserStatus } = useUserContext();

	const loginCallback = async (requestBody: ExpectedBody) => {
		try {
			const response = await login(requestBody);

			if (response.status === 200) {
				const { name, email, uuid: id } = response.data;
				const user: User = { name, email, id, role: USER_ROLES.admin, cart: [] };
				updateUserStatus(user);
				push('/account/');
			}
		} catch (err) {
			const error = err as AxiosResponse;
			if (error.status === 403)
				throw 'El usuario y la contraseña no coinciden. Vuelva a intentarlo.';
		}
	};

	return (
		<LandingLayout>
			<Head>
				<title>Iniciar Sesión de Usuario | Veranalia</title>
			</Head>
			<Wrapper>
				<Title>Iniciar Sesión</Title>
				<Form callback={loginCallback}>
					<Form.Label>
						Email
						<Form.Text name="email" />
					</Form.Label>
					<Form.Label>
						Contraseña
						<Form.Password name="password" />
					</Form.Label>
					<Form.Submit>Iniciar Sesión</Form.Submit>
				</Form>
			</Wrapper>
		</LandingLayout>
	);
};

export default Login;
