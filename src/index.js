import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Locale } from "./context/Locale";
import { App } from "./pages/App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Locale>
			<App />
		</Locale>
	</StrictMode>
);
