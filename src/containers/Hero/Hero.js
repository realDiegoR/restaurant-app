import { DecorationDot } from "@components/DecorationDot/DecorationDot";
import backgroundMobileAvif from "@assets/ui/hero_mobile.avif";
import backgroundMobileWebp from "@assets/ui/hero_mobile.webp";
import backgroundTabletAvif from "@assets/ui/hero_tablet.avif";
import backgroundTabletWebp from "@assets/ui/hero_tablet.webp";
import backgroundDesktopAvif from "@assets/ui/hero_desktop.avif";
import backgroundDesktopWebp from "@assets/ui/hero_desktop.webp";
import imagotypeAvif from "@assets/brand/veranalia_imagotype.avif";
import imagotypeWebp from "@assets/brand/veranalia_imagotype.webp";
import "./Hero.scss";

export const Hero = () => {
	return (
		<section className="Hero">
			<div className="Hero-content">
				<picture>
					<source
						srcSet={backgroundMobileAvif}
						className="Hero-backgroundImage"
						media="(max-width: 600px)"
						type="image/avif"
						alt="background"
					/>
					<source
						srcSet={backgroundMobileWebp}
						className="Hero-backgroundImage"
						media="(max-width: 600px)"
						type="image/webp"
						alt="background"
					/>
					<source
						srcSet={backgroundTabletAvif}
						className="Hero-backgroundImage"
						media="(max-width: 1024px)"
						type="image/avif"
						alt="background"
					/>
					<source
						srcSet={backgroundTabletWebp}
						className="Hero-backgroundImage"
						media="(max-width: 1024px)"
						type="image/webp"
						alt="background"
					/>
					<source
						srcSet={backgroundDesktopAvif}
						className="Hero-backgroundImage Hero-backgroundImage--desktop"
						media="(min-width: 1024px)"
						type="image/avif"
						alt="background"
					/>
					<img
						srcSet={backgroundDesktopWebp}
						className="Hero-backgroundImage Hero-backgroundImage--desktop"
						media="(min-width: 1024px)"
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
