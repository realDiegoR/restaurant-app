import Head from 'next/head';
import { LandingLayout } from '@layouts/landing/LandingLayout';
import { Contact } from '@components/Contact/Contact';

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
