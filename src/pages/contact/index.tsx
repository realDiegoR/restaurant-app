import Head from 'next/head';
import { LandingLayout } from '@layouts/landing';
import { Form } from '@common/form';
import { Title } from '@common/title';
import { Wrapper } from '@common/wrapper';
import styles from './contact.module.scss';

type Body = {
	fullName: string;
	email: string;
	password: string;
};

const Contact = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Contact | Veranalia</title>
			</Head>
			<main>
				<Wrapper>
					<Title>Contacto</Title>
					<p className={styles.paragraph}>
						No dudes en llegar hacia nosotros. Ya sea una duda, una idea o una propuesta, háznosla
						saber!
					</p>
					<Form callback={() => new Promise(() => undefined)}>
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
		</LandingLayout>
	);
};

export default Contact;
