import React from "react";
import Navigation from "../components/Header/Navigation";
import Hero from "../components/Hero";

import Testi from "../components/Testimoni";
import Footer from "../components/Footer/Footer";

import Features from "../components/Features/feature";

function Landing() {
	return (
		<>
			<Navigation />
			<Hero />

			<Features/>
			<Testi />
			<Footer />
		</>
	);
}

export default Landing;
