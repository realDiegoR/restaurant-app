import { useLocaleContext } from "@context/Locale";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { Icon } from "@components/Icon/Icon";
import { DecorationDot } from "@components/DecorationDot/DecorationDot";
import { Pastelito } from "@components/Pastelito/Pastelito";
import "./WhoAreWe.scss";

export const WhoAreWe = () => {
	const {
		es: { whoAreWe },
	} = useLocaleContext();

	return (
		<section className="WhoAreWe">
			<div className="Wrapper">
				<h2 className="WhoAreWe-title">{whoAreWe.title}</h2>
				<div className="WhoAreWe-pitch">
					{whoAreWe.salesPitchSentences.map(({ id, text }) => (
						<p className="WhoAreWe-text" key={id}>
							{text}
						</p>
					))}
				</div>
				<LinkButton
					icon={<Icon name="menu" />}
					text={whoAreWe.callToAction}
					to="/menu"
				/>
			</div>

			<DecorationDot bottom="55vw" right="7vw" size=".85rem" />
			<DecorationDot bottom="5.5vw" left="8vw" size=".55rem" />
			<Pastelito top="3rem" right="-21rem" size="70vw" />
		</section>
	);
};
