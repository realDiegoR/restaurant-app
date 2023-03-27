import React from "react";
import { Schedule } from "@containers/Schedule/Schedule";
import { Footer } from "@containers/Footer/Footer";
import "./SchedulePage.scss";

export const SchedulePage = () => {
	return (
		<main className="SchedulePage">
			<Schedule />
			<Footer />
		</main>
	);
};
