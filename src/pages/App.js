import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "@containers/Header/Header";
import { Home } from "./HomePage/Home";
import { MenuPage } from "./MenuPage/MenuPage";
import { WhoAreWePage } from "./WhoAreWePage/WhoAreWePage";
import { MostPopularPage } from "./MostPopularPage/MostPopularPage";
import { LocationPage } from "./LocationPage/LocationPage";
import { SchedulePage } from "./SchedulePage/SchedulePage";
import { TestimoniesPage } from "./TestimoniesPage/TestimoniesPage";

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
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/who-are-we" element={<WhoAreWePage />} />
				<Route path="/most-popular" element={<MostPopularPage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/testimonies" element={<TestimoniesPage />} />
			</Routes>
		</HashRouter>
	);
};
