import { useLocaleContext } from "@context/Locale";
import { Location } from "@components/Location/Location";
import "./WhereAreWe.scss";

export const WhereAreWe = () => {
	const {
		es: { whereAreWe },
	} = useLocaleContext();
	return (
		<section className="WhereAreWe">
			<div className="Wrapper">
				<h2 className="WhereAreWe-title">{whereAreWe.title}</h2>
				<div className="WhereAreWe-locations">
					{whereAreWe.locations.map((location) => (
						<Location key={location.id} {...location} />
					))}
				</div>
			</div>
		</section>
	);
};
