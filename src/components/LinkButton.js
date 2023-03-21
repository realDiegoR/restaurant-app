import { Link } from "react-router-dom";

export const LinkButton = ({ icon = null, text }) => {
	return (
		<Link to="/" className="LinkButton">
			{icon && <span className="LinkButton-icon">{icon}</span>}
			{text}
		</Link>
	);
};
