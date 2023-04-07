import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { Header } from "@containers/Header/Header";
const Home = lazy(() => import("./HomePage/Home"));
const MenuPage = lazy(() => import("./MenuPage/MenuPage"));
const WhoAreWePage = lazy(() => import("./WhoAreWePage/WhoAreWePage"));
const MostPopularPage = lazy(() => import("./MostPopularPage/MostPopularPage"));
const LocationPage = lazy(() => import("./LocationPage/LocationPage"));
const SchedulePage = lazy(() => import("./SchedulePage/SchedulePage"));
const TestimoniesPage = lazy(() => import("./TestimoniesPage/TestimoniesPage"));

export const App = () => {
	const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
	return (
		<HashRouter>
			<Header
				dropdownMenuIsOpen={dropdownMenuIsOpen}
				setDropdownMenuIsOpen={setDropdownMenuIsOpen}
			/>
			<Suspense fallback={<p>holis</p>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/who-are-we" element={<WhoAreWePage />} />
					<Route path="/most-popular" element={<MostPopularPage />} />
					<Route path="/location" element={<LocationPage />} />
					<Route path="/schedule" element={<SchedulePage />} />
					<Route path="/testimonies" element={<TestimoniesPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Suspense>
		</HashRouter>
	);
};
