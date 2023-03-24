import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "@containers/Header/Header";
import { Home } from "./HomePage/Home";

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
			</Routes>
		</HashRouter>
	);
};
