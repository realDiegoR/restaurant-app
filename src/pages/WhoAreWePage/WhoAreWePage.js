import { WhoAreWe } from "@containers/WhoAreWe/WhoAreWe";
import { Footer } from "@containers/Footer/Footer";
import "./WhoAreWePage.scss";

export const WhoAreWePage = () => {
	return (
		<main className="WhoAreWePage">
			<WhoAreWe />
			<Footer />
		</main>
	);
};
