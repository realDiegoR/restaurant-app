import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "@containers/Header/Header";
import { Home } from "./HomePage/Home";
import { LocationPage } from "./LocationPage/LocationPage";
import { WhoAreWePage } from "./WhoAreWePage/WhoAreWePage";

export const App = () => {
	const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
	return (
		<HashRouter>
			<Header
				dropdownMenuIsOpen={dropdownMenuIsOpen}
				setDropdownMenuIsOpen={setDropdownMenuIsOpen}
			/>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/who-are-we" element={<WhoAreWePage />} />
				<Route path="/location" element={<LocationPage />} />
			</Routes>
		</HashRouter>
	);
};
