import { Icon } from "@components/Icon/Icon";
import "./Location.scss";

export const Location = (props) => {
	return (
		<section className="Location">
			<h3 className="Location-name">{props.name}</h3>
			<div className="Location-infoContainer">
				<div className="Location-contactInfo">
					<Icon name="flag" />
					<p>{props.place}</p>
				</div>
				<div className="Location-contactInfo">
					<Icon name="phone" />
					<p>{props.phoneNumber}</p>
				</div>
			</div>
			<iframe
				className="Location-map"
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}&q=McDonalds,Marietta+Georgia&zoom=14`}
			/>
		</section>
	);
};
