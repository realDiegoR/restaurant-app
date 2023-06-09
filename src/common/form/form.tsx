import {
	type ReactNode,
	type InputHTMLAttributes,
	type TextareaHTMLAttributes,
	type ButtonHTMLAttributes,
	type FormEventHandler,
	useRef,
	useState,
} from 'react';
import { LoadingSpinner } from '@common/loading-spinner/';
import styles from './form.module.scss';

interface FormProps {
	children: ReactNode;
	callback: (requestBody: any) => Promise<void>;
}

type InputNative = InputHTMLAttributes<HTMLInputElement>;
type TextAreaNative = TextareaHTMLAttributes<HTMLTextAreaElement>;
type ButtonNative = ButtonHTMLAttributes<HTMLButtonElement>;

const Form = ({ children, callback }: FormProps) => {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
		ev.preventDefault();
		const formData = new FormData(formRef.current ?? undefined);
		const requestBody: any = {};

		for (const [key, value] of formData.entries()) {
			requestBody[key] = value as string;
		}

		try {
			setError(null);
			setLoading(true);
			await callback(requestBody);
		} catch (err) {
			const error = err as string;
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form ref={formRef} className={styles.Form} onSubmit={handleSubmit}>
			{children}
			{error ? <p className={styles.Form_error}>{error}</p> : null}
			{loading ? <LoadingSpinner /> : null}
		</form>
	);
};

Form.Label = function Label({ children }: { children: ReactNode }) {
	return <label className={styles.Form_label}>{children}</label>;
};

Form.Text = function Text(props: InputNative) {
	return <input {...props} type="text" className={styles.Form_text} required />;
};

Form.Password = function Password(props: InputNative) {
	return <input {...props} type="password" className={styles.Form_text} required />;
};

Form.Email = function Email(props: InputNative) {
	return (
		<input
			{...props}
			type="email"
			className={styles.Form_text}
			required
			pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
		/>
	);
};

Form.TextArea = function TextArea(props: TextAreaNative) {
	return <textarea {...props} className={styles.Form_textarea} required />;
};

Form.Submit = function Submit(props: ButtonNative) {
	return <button {...props} type="submit" className={styles.Form_submit} />;
};

export { Form };
