import { Testimonies } from "@containers/Testimonies/Testimonies";
import { Footer } from "@containers/Footer/Footer";
import "./TestimoniesPage.scss";

export const TestimoniesPage = () => {
	return (
		<main className="TestimoniesPage">
			<Testimonies />
			<Footer />
		</main>
	);
};
