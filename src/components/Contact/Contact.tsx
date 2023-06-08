import { Input } from '@common/Input/Input';
import { Title } from '@common/Title/Title';
import styles from './contact.module.scss';

export const Contact = () => {
	return (
		<div className={styles.Contact}>
			<Title>Contacto</Title>
			<p className={styles['Contact-p']}>
				No dudes en llegar hacia nosotros. Ya sea una duda, una idea o una propuesta, háznosla
				saber!
			</p>
			<form className={styles['Contact-form']}>
				<Input label="Ingresa tu nombre">
					<Input.Text name="full-name" placeholder="Diego Cabrera" minLength={3} />
				</Input>
				<Input label="Ingresa tu email">
					<Input.Email name="full-name" placeholder="email@example.com" />
				</Input>
				<Input label="Mensaje">
					<Input.TextArea name="full-name" placeholder="Hey!" minLength={10} />
				</Input>
				<button type="submit" className={styles['Contact-send']}>
					Enviar
				</button>
			</form>
		</div>
	);
};
