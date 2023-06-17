import { LandingLayout } from '@layouts/landing';
import Head from 'next/head';
import { Title } from '@common/Title/Title';
import { Form } from '@common/form';
import { Wrapper } from '@common/wrapper';

const Login = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Iniciar Sesión de Usuario | Veranalia</title>
			</Head>
			<Wrapper>
				<Title>Iniciar Sesión</Title>
				<Form method="POST" endpoint="../api/user/login">
					<Form.Label>
						Nombre de Usuario
						<Form.Text name="username" />
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
