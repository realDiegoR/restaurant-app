import { useGlobalContext } from "@context/Provider";
import { LinkButton } from "@components/LinkButton/LinkButton";
import { Icon } from "@components/Icon/Icon";
import "./WhoAreWe.scss";

export const WhoAreWe = () => {
	const {
		es: { whoAreWe },
	} = useGlobalContext();

	return (
		<section className="WhoAreWe Wrapper">
			<h2 className="WhoAreWe-title">{whoAreWe.title}</h2>
			<div className="WhoAreWe-pitch">
				{whoAreWe.salesPitchSentences.map(({ id, text }) => (
					<p className="WhoAreWe-text" key={id}>
						{text}
					</p>
				))}
			</div>
			<LinkButton icon={<Icon name="menu" />} text={whoAreWe.callToAction} />
			<span className="WhoAreWe-decorationBall">
				<Icon name="ball" />
			</span>
			<span className="WhoAreWe-decorationBall">
				<Icon name="ball" />
			</span>
		</section>
	);
};
