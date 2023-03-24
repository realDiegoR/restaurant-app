import { Icon } from "@components/Icon/Icon";
import { useLocaleContext } from "@context/Locale";
import "./Footer.scss";

export const Footer = () => {
	const {
		es: { footer },
	} = useLocaleContext();

	return (
		<footer className="Footer">
			<div className="Wrapper">
				<section className="Footer-section">
					<h2>{footer.followUs.title}</h2>
					<ul className="Footer-links">
						{footer.followUs.icons.map((icon) => (
							<li key={icon.id}>
								<Icon name={icon.name} />
							</li>
						))}
					</ul>
				</section>
				<section className="Footer-section">
					<h2>{footer.rateUs.title}</h2>
					<ul className="Footer-links">
						{footer.rateUs.icons.map((icon) => (
							<li key={icon.id}>
								<Icon name={icon.name} />
							</li>
						))}
					</ul>
				</section>
			</div>
			<p className="Footer-signature">{footer.lovelyNote}</p>
		</footer>
	);
};
