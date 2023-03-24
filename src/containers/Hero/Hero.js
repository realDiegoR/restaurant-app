import { DecorationDot } from "@components/DecorationDot/DecorationDot";
import backgroundMobileAvif from "@assets/ui/hero_mobile.avif";
import backgroundMobileWebp from "@assets/ui/hero_mobile.webp";
import backgroundTabletAvif from "@assets/ui/hero_tablet.avif";
import backgroundTabletWebp from "@assets/ui/hero_tablet.webp";
import imagotypeAvif from "@assets/brand/veranalia_imagotype.avif";
import imagotypeWebp from "@assets/brand/veranalia_imagotype.webp";
import "./Hero.scss";

export const Hero = () => {
	return (
		<section className="Hero">
			<div className="Hero-content">
				<picture>
					<source
						className="Hero-backgroundImage"
						srcSet={backgroundMobileAvif}
						media="(max-width: 600px)"
						type="image/avif"
						alt="background"
					/>
					<source
						className="Hero-backgroundImage"
						media="(max-width: 600px)"
						srcSet={backgroundMobileWebp}
						type="image/webp"
						alt="background"
					/>
					<source
						className="Hero-backgroundImage"
						srcSet={backgroundTabletAvif}
						media="(min-width: 600px)"
						type="image/avif"
						alt="background"
					/>
					<img
						className="Hero-backgroundImage"
						src={backgroundTabletWebp}
						media="(min-width: 600px)"
						type="image/webp"
						alt="background"
					/>
				</picture>
				<div className="Hero-brand">
					<picture className="Hero-imagotype">
						<source
							srcSet={imagotypeAvif}
							type="image/avif"
							alt="veranalia imagotype"
						/>
						<img
							src={imagotypeWebp}
							type="image/webp"
							alt="veranalia imagotype"
						/>
					</picture>
					<h1 className="Hero-slogan">Si es Veranalia, es bueno!</h1>
				</div>
			</div>
			<DecorationDot bottom="45vw" left="60vw" size=".75rem" />
			<DecorationDot bottom="8vw" left="32vw" size=".75rem" />
		</section>
	);
};
