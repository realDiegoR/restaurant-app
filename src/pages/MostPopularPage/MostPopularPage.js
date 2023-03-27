import { MostPopular } from "@containers/MostPopular/MostPopular";
import { Footer } from "@containers/Footer/Footer";
import "./MostPopularPage.scss";

export const MostPopularPage = () => {
	return (
		<main className="MostPopularPage">
			<MostPopular />
			<Footer />
		</main>
	);
};
