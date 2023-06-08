import { LandingLayout } from 'layouts/landing/LandingLayout';
import { Contact } from '../components/Contact/Contact';
import Head from 'next/head';

const contact = () => {
	return (
		<LandingLayout>
			<Head>
				<title>Contact | Veranalia</title>
			</Head>
			<Contact />
		</LandingLayout>
	);
};

export default contact;
