import { Link } from "react-router-dom";
import "./LinkButton.scss";

export const LinkButton = ({ icon = null, text }) => {
	return (
		<Link to="/" className="LinkButton">
			{icon && <span className="LinkButton-icon">{icon}</span>}
			{text}
		</Link>
	);
};
