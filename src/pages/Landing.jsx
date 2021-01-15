import React from "react";
import Navigation from "../components/Header/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer"

import Features from "../components/Features/feature";

function Landing() {
	return (
		<>
			<Navigation />
			<Hero />
			<Footer />
			<Features/>
		</>
	);
}

export default Landing;
