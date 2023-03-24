import { Link } from "react-router-dom";
import "./PopularMealItem.scss";

export const PopularMealItem = (props) => {
	return (
		<li className="PopularMealItem">
			<picture className="PopularMealItem-picture PopularMealItem-picture--desktop">
				<source
					className="PopularMealItem-image--desktop"
					srcSet={props.img.src.avif}
					type="image/avif"
					loading="lazy"
					alt={props.img.alt}
				/>
				<img
					className="PopularMealItem-image--desktop"
					src={props.img.src.webp}
					type="image/webp"
					loading="lazy"
					alt={props.img.alt}
				/>
			</picture>
			<div className="PopularMealItem-itemInfo">
				{props.isPromotion && (
					<p className="PopularMealItem-promotion">{props.promotionText}</p>
				)}
				<picture className="PopularMealItem-picture PopularMealItem-picture--mobile">
					<source
						className="PopularMealItem-image--mobile"
						srcSet={props.img.src.avif}
						type="image/avif"
						loading="lazy"
						alt={props.img.alt}
					/>
					<img
						className="PopularMealItem-image--mobile"
						src={props.img.src.webp}
						type="image/webp"
						loading="lazy"
						alt={props.img.alt}
					/>
				</picture>

				<div className="PopularMealItem-importantInfo">
					<h3 className="PopularMealItem-title">{props.title}</h3>
					<p className="PopularMealItem-price">${props.price}</p>
				</div>
				<p className="PopularMealItem-description">{props.description}</p>
				<Link className="PopularMealItem-cta">{props.callToAction}</Link>
			</div>
		</li>
	);
};
