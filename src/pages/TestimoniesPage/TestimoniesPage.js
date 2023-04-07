import { Testimonies } from "@containers/Testimonies/Testimonies";
import { Footer } from "@containers/Footer/Footer";
import "./TestimoniesPage.scss";

const TestimoniesPage = () => {
	return (
		<main className="TestimoniesPage">
			<Testimonies />
			<Footer />
		</main>
	);
};

export default TestimoniesPage;
