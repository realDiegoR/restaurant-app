import { Icon } from "@components/Icon/Icon";
import "./DecorationDot.scss";

export const DecorationDot = ({
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
		<span className="DecorationBall" style={position}>
			<Icon name="ball" />
		</span>
	);
};
