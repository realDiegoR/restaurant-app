import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "@containers/Header";
import { Home } from "./home/Home";

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
