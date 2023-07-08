import { Wrapper } from '@common/wrapper';
import { LandingLayout } from '@layouts/landing';
import Head from 'next/head';
import { Form } from '@common/form';
import { Title } from '@common/title';
import { signup, Body } from '@services/api/user';
import { useUserContext } from '@context/UserContext';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';

const SignUpPage = () => {
	const { updateUserStatus } = useUserContext();
	const { push } = useRouter();

	const createUser = async (body: Body) => {
		try {
			const response = await signup(body);

			if (response.status === 200) {
				updateUserStatus(response.data);
				push('/account/');
			}
		} catch (err) {
			const error = err as AxiosResponse;
			if (error.status >= 400 && error.status) throw 'Hubo un error. Vuelva a intentarlo.';
		}
	};

	return (
		<LandingLayout>
			<Head>
				<title>Crear Cuenta | Veranalia</title>
			</Head>
			<Wrapper>
				<Title>Crear cuenta</Title>
				<Form callback={createUser}>
					<Form.Label>
						Nombre
						<Form.Text name="name" required />
					</Form.Label>
					<Form.Label>
						Email
						<Form.Email name="email" required />
					</Form.Label>
					<Form.Label>
						Contraseña
						<Form.Password name="password" required />
					</Form.Label>
					<Form.Submit>Crear</Form.Submit>
				</Form>
			</Wrapper>
		</LandingLayout>
	);
};

export default SignUpPage;
