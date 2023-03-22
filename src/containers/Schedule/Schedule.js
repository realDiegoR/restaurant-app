import { useGlobalContext } from "@context/Provider";
import { OpeningHoursItem } from "@components/OpeningHoursItem/OpeningHoursItem";
import "./Schedule.scss";

export const Schedule = () => {
	const {
		es: { schedule },
	} = useGlobalContext();
	return (
		<section className="Schedule Wrapper">
			<h2 className="Schedule-title">{schedule.title}</h2>
			<ul className="Schedule-ul">
				{schedule.days.map((day) => (
					<OpeningHoursItem key={day.id} {...day} />
				))}
			</ul>
		</section>
	);
};
