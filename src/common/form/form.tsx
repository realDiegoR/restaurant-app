import {
	type ReactNode,
	type InputHTMLAttributes,
	type TextareaHTMLAttributes,
	type ButtonHTMLAttributes,
	useRef,
	FormEventHandler,
} from 'react';
import styles from './form.module.scss';

interface FormProps {
	children: ReactNode;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	endpoint?: string;
}

interface ReqBody {
	[key: string]: FormDataEntryValue;
}

type InputNative = InputHTMLAttributes<HTMLInputElement>;
type TextAreaNative = TextareaHTMLAttributes<HTMLTextAreaElement>;
type ButtonNative = ButtonHTMLAttributes<HTMLButtonElement>;

const Form = ({ children, method = 'GET', endpoint = '' }: FormProps) => {
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
		ev.preventDefault();
		const formData = new FormData(formRef.current ?? undefined);
		const entries = formData.entries();

		const requestBody: ReqBody = {};
		for (const pair of entries) {
			requestBody[pair[0]] = pair[1];
		}

		fetch(endpoint, {
			method,
			body: JSON.stringify(requestBody),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.warn(err));
	};

	return (
		<form ref={formRef} className={styles.Form} onSubmit={handleSubmit}>
			{children}
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
