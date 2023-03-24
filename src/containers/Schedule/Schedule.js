import { useLocaleContext } from "@context/Locale";
import { OpeningHoursItem } from "@components/OpeningHoursItem/OpeningHoursItem";
import { DecorationDot } from "@components/DecorationDot/DecorationDot";
import { Pastelito } from "@components/Pastelito/Pastelito";
import "./Schedule.scss";

export const Schedule = () => {
	const {
		es: { schedule },
	} = useLocaleContext();
	return (
		<section className="Schedule">
			<div className="Wrapper">
				<h2 className="Schedule-title">{schedule.title}</h2>
				<ul className="Schedule-ul">
					{schedule.days.map((day) => (
						<OpeningHoursItem key={day.id} {...day} />
					))}
				</ul>
				<DecorationDot top="5vw" left="2vw" size=".75rem" />
				<DecorationDot top="72vw" right="1vw" size="1rem" />
				<Pastelito top="0rem" right="-15rem" size="70vw" />
			</div>
		</section>
	);
};
