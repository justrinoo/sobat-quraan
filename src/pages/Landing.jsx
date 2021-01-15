import React from "react";
import Navigation from "../components/Header/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features/feature";

function Landing() {
	return (
		<>
			<Navigation />
			<Hero />
			<Features></Features>
		</>
	);
}

export default Landing;
