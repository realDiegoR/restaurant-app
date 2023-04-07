import { WhoAreWe } from "@containers/WhoAreWe/WhoAreWe";
import { Footer } from "@containers/Footer/Footer";
import "./WhoAreWePage.scss";

const WhoAreWePage = () => {
	return (
		<main className="WhoAreWePage">
			<WhoAreWe />
			<Footer />
		</main>
	);
};

export default WhoAreWePage;
