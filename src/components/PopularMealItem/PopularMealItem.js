import { Link } from "react-router-dom";
import "./PopularMealItem.scss";

export const PopularMealItem = (props) => {
	return (
		<li className="PopularMealItem">
			{props.isPromotion && (
				<p className="PopularMealItem-promotion">{props.promotionText}</p>
			)}
			<img
				className="PopularMealItem-image"
				src={props.img.src}
				alt={props.img.alt}
			/>
			<div className="PopularMealItem-importantInfo">
				<h3 className="PopularMealItem-title">{props.title}</h3>
				<p className="PopularMealItem-price">${props.price}</p>
			</div>
			<p className="PopularMealItem-description">{props.description}</p>
			<Link className="PopularMealItem-cta">{props.callToAction}</Link>
		</li>
	);
};
