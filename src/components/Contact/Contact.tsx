import { Form } from '@common/form';
import { Title } from '@common/Title/Title';
import { Wrapper } from '@common/wrapper/wrappper';
import styles from './contact.module.scss';

export const Contact = () => {
	return (
		<main className={styles.Contact}>
			<Wrapper>
				<Title>Contacto</Title>
				<p className={styles['Contact-p']}>
					No dudes en llegar hacia nosotros. Ya sea una duda, una idea o una propuesta, háznosla
					saber!
				</p>
				<Form>
					<Form.Label>
						Tu nombre
						<Form.Text name="full-name" placeholder="Diego Cabrera" minLength={3} />
					</Form.Label>
					<Form.Label>
						Tu email
						<Form.Email name="email" placeholder="email@example.com" />
					</Form.Label>
					<Form.Label>
						Mensaje
						<Form.TextArea name="message" placeholder="Hey!" minLength={10} />
					</Form.Label>
					<Form.Submit>Enviar</Form.Submit>
				</Form>
			</Wrapper>
		</main>
	);
};
