import { useState } from "react";
import { useLocaleContext } from "@context/Locale";
import { MealCategory } from "@containers/MealCategory/MealCategory";
import imagotypeAvif from "@assets/brand/veranalia_imagotype.avif";
import imagotypeWebp from "@assets/brand/veranalia_imagotype.webp";
import "./MenuPage.scss";

export const MenuPage = () => {
	const {
		es: { foodMenu },
	} = useLocaleContext();
	const [currentSection, setCurrentSection] = useState("main");
	const changeSection = (section) => {
		setCurrentSection(section);
	};

	return (
		<main className="MenuPage">
			<picture className="MenuPage-imagotype MenuPage-imagotype--mobile">
				<source
					srcSet={imagotypeAvif}
					type="image/avif"
					alt="Veranalia Imagotype"
				/>
				<img src={imagotypeWebp} type="image/webp" alt="Veranalia Imagotype" />
			</picture>
			<nav className="MenuPage-nav">
				<ul className="MenuPage-navList">
					{foodMenu.mobileSectionButtons.map(({ id, name, keyname }) => (
						<li
							key={id}
							className={`MenuPage-navItem ${
								currentSection === keyname ? "MenuPage-navItem--active" : ""
							} `}
						>
							<button type="button" onClick={() => changeSection(keyname)}>
								{name}
							</button>
						</li>
					))}
				</ul>
			</nav>
			<div className="MenuPage-sectionDivider">
				<section
					className={`MenuPage-foodSection ${
						currentSection === "main" ? "MenuPage-foodSection--visible" : ""
					}`}
				>
					<picture className="MenuPage-imagotype MenuPage-imagotype--desktop">
						<source
							srcSet={imagotypeAvif}
							type="image/avif"
							alt="Veranalia Imagotype"
						/>
						<img
							src={imagotypeWebp}
							type="image/webp"
							alt="Veranalia Imagotype"
						/>
					</picture>
					{foodMenu.main.map((foodCategory) => (
						<MealCategory key={foodCategory.id} {...foodCategory} />
					))}
				</section>
				<section
					className={`MenuPage-foodSection ${
						currentSection === "breakfast"
							? "MenuPage-foodSection--visible"
							: ""
					}`}
				>
					{foodMenu.breakfast.map((foodCategory) => (
						<MealCategory key={foodCategory.id} {...foodCategory} />
					))}
				</section>
			</div>
		</main>
	);
};
