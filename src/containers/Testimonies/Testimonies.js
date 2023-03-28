import { useLocaleContext } from "@context/Locale";
import { useIGFetch } from "../../hooks/useIGFetch";
import { CustomerPost } from "@components/CustomerPost/CustomerPost";
import "./Testimonies.scss";

export const Testimonies = () => {
	const {
		es: { testimonies },
	} = useLocaleContext();
	const requestData = useIGFetch();

	return (
		<section className="Testimonies">
			<div className="Wrapper">
				<h2 className="Testimonies-title">{testimonies.title}</h2>
				<CustomerPost {...requestData} />
			</div>
		</section>
	);
};
