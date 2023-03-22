import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Header } from "@containers/Header/Header";

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
