import React from "react";
import { Schedule } from "@containers/Schedule/Schedule";
import { Footer } from "@containers/Footer/Footer";
import "./SchedulePage.scss";

const SchedulePage = () => {
	return (
		<main className="SchedulePage">
			<Schedule />
			<Footer />
		</main>
	);
};

export default SchedulePage;
