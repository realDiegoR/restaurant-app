import { Hero } from "@containers/Hero/Hero";
import { WhoAreWe } from "@containers/WhoAreWe/WhoAreWe";
import { MostPopular } from "@containers/MostPopular/MostPopular";
import "./Home.scss";
import { WhereAreWe } from "@containers/WhereAreWe/WhereAreWe";
import { Schedule } from "@containers/Schedule/Schedule";

export const Home = () => {
	return (
		<section className="Home">
			<Hero />
			<WhoAreWe />
			<MostPopular />
			<WhereAreWe />
			<Schedule />
		</section>
	);
};
