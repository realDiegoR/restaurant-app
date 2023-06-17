import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Quicksand, Sintony } from 'next/font/google';
import { Header } from '@components/Header/Header';
import { Locale } from '@context/Locale';
import '@styles/main.scss';
import { UserProvider } from '@context/UserContext';

const quicksand = Quicksand({
	subsets: ['latin'],
	variable: '--main-font',
	display: 'swap',
});
const sintony = Sintony({
	weight: ['400', '700'],
	variable: '--strong-font',
	subsets: ['latin'],
	display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${quicksand.className} ${quicksand.variable} ${sintony.variable}`}>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
			</Head>
			<UserProvider>
				<Locale>
					<Header />
					<Component {...pageProps} />
					<div id="modal"></div>
				</Locale>
			</UserProvider>
		</div>
	);
}
