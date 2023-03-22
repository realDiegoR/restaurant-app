import "./OpeningHoursItem.scss";

export const OpeningHoursItem = (props) => {
	const day = new Date().getDay();
	return (
		<li
			className={`OpeningHoursItem ${
				day === props.dayId ? "OpeningHoursItem--today" : ""
			}`}
		>
			<p className="OpeningHoursItem-day">{props.name}</p>
			<p className="OpeningHoursItem-openingHours">{props.openingHours}</p>
		</li>
	);
};
