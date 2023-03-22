import { Icon } from "@components/Icon/Icon";
import background from "@assets/ui/Hero2.png";
import imagotype from "@assets/brand/veranalia_imagotype.png";
import "./Hero.scss";

export const Hero = () => {
	return (
		<section className="Hero">
			<img className="Hero-backgroundImage" src={background} alt="background" />
			<div className="Hero-brand">
				<img
					className="Hero-imagotype"
					src={imagotype}
					alt="veranalia imagotype"
				/>
				<h1 className="Hero-slogan">Si es Veranalia, es bueno!</h1>
			</div>
			<span className="Hero-decorationBall">
				<Icon name="ball" />
			</span>
			<span className="Hero-decorationBall">
				<Icon name="ball" />
			</span>
		</section>
	);
};
