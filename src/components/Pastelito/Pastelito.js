import pastelitoAvif from "@assets/ui/pastelito.avif";
import pastelitoWebp from "@assets/ui/pastelito.webp";
import "./Pastelito.scss";

export const Pastelito = ({
	top = "",
	left = "",
	right = "",
	bottom = "",
	size = "",
}) => {
	const position = {
		top,
		left,
		right,
		bottom,
		width: size,
		height: size,
	};
	return (
		<span className="Pastelito" style={position}>
			<picture>
				<source srcSet={pastelitoAvif} type="image/avif" alt="pastelito" />
				<img src={pastelitoWebp} type="image/webp" alt="pastelito" />
			</picture>
		</span>
	);
};
