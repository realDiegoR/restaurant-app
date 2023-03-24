import { useLocaleContext } from "@context/Locale";
import { PopularMealItem } from "@components/PopularMealItem/PopularMealItem";
import "./MostPopular.scss";

export const MostPopular = () => {
	const {
		es: { mostPopular },
	} = useLocaleContext();

	return (
		<section className="MostPopular">
			<div className="Wrapper">
				<h2 className="MostPopular-title">{mostPopular.title}</h2>
				<ul className="MostPopular-ul">
					{mostPopular.items.map((item) => (
						<PopularMealItem
							key={item.id}
							promotionText={mostPopular.promotionText}
							{...item}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};
