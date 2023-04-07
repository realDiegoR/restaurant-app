import { MostPopular } from "@containers/MostPopular/MostPopular";
import { Footer } from "@containers/Footer/Footer";
import "./MostPopularPage.scss";

const MostPopularPage = () => {
	return (
		<main className="MostPopularPage">
			<MostPopular />
			<Footer />
		</main>
	);
};

export default MostPopularPage;
