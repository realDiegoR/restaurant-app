import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@containers/Header/Header";
import { Home } from "./HomePage/Home";

export const App = () => {
	const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
	return (
		<BrowserRouter>
			<Header
				dropdownMenuIsOpen={dropdownMenuIsOpen}
				setDropdownMenuIsOpen={setDropdownMenuIsOpen}
			/>

			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
