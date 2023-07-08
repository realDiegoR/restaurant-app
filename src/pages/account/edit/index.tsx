import { Title } from '@common/title';
import { LandingLayout } from '@layouts/landing';
import { Wrapper } from '@common/wrapper';
import { Form } from '@common/form';

const EditAccount = () => {
	return (
		<LandingLayout>
			<Wrapper>
				<Title>Editar Perfil</Title>
				<Form callback={() => new Promise(() => undefined)}>
					<Form.Label>
						Tu nombre completo
						<Form.Text />
					</Form.Label>
					<Form.Label>
						Tu nombre de usuario
						<Form.Text />
					</Form.Label>
					<Form.Label>
						Tu contraseña
						<Form.Password />
					</Form.Label>
					<Form.Label>
						Confirma tu contraseña
						<Form.Password />
					</Form.Label>
					<Form.Submit>Realizar Cambios</Form.Submit>
				</Form>
			</Wrapper>
		</LandingLayout>
	);
};

export default EditAccount;
