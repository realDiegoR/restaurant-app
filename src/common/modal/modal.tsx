import { useState, useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface ModalProps {
	children: ReactNode;
	close: () => void;
}

export const Modal = ({ children, close }: ModalProps) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		modalRef.current = document.querySelector('#modal');
		setIsMounted(true);
	}, []);

	if (isMounted && modalRef.current)
		return createPortal(
			<>
				<div className={`${styles.Overlay}`} onClick={close}></div>
				<div className={`${styles.Modal}`}>{children}</div>
			</>,
			modalRef.current
		);

	return null;
};
