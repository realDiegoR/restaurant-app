import { WhereAreWe } from "@containers/WhereAreWe/WhereAreWe";
import "./LocationPage.scss";
import { Footer } from "@containers/Footer/Footer";

export const LocationPage = () => {
	return (
		<main className="LocationPage">
			<WhereAreWe />
			<Footer />
		</main>
	);
};
