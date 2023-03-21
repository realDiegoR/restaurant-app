import { Hero } from "@containers/Hero";
import { WhoAreWe } from "../../containers/WhoAreWe";

export const Home = () => {
	return (
		<section className="Home">
			<Hero />
			<WhoAreWe />
		</section>
	);
};
