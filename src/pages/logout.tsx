import type { GetServerSideProps } from 'next';
import { logout } from '@services/user';

const Logout = () => <></>;

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await logout();
	if (res) {
		return {
			redirect: { destination: '/', permanent: false },
		};
	}
	return { props: {} };
};

export default Logout;
