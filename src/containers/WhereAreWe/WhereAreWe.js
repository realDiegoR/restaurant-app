import { useGlobalContext } from "@context/Provider";
import { Location } from "@components/Location/Location";
import "./WhereAreWe.scss";

export const WhereAreWe = () => {
	const {
		es: { whereAreWe },
	} = useGlobalContext();
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
