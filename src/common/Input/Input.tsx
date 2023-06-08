import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './input.module.scss';

interface InputProps {
  children: ReactNode;
  label: string;
}

type InputNative = InputHTMLAttributes<HTMLInputElement>
type TextAreaNative = TextareaHTMLAttributes<HTMLTextAreaElement>

const Input = ({ children, label }: InputProps) => {
  return (
    <div className={styles.Input}>
      <label className={styles['Input-label']}>
        {label}
        {children}
      </label>
    </div>
  );
};

Input.Text = function Input_Text(props: InputNative) {
  return (
    <>
      <input {...props} type="text" className={styles['Input-text']} required />
    </>
  );
};

Input.Password = function Input_Password(props: InputNative) {
  return (
    <>
      <input {...props} type="password" className={styles['Input-text']} required />
    </>
  );
};

Input.Email = function Input_Email(props: InputNative) {
  return (
    <>
      <input
        {...props}
        type="email"
        className={styles['Input-text']}
        required
        pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
      />
    </>
  );
};

Input.TextArea = function Input_Text(props: TextAreaNative) {
  return (
    <>
      <textarea {...props} className={styles['Input-textarea']} required />
    </>
  );
};

export { Input };
