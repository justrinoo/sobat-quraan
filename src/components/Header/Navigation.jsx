import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Sobat Quraan
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbar"
						aria-controls="navbar"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbar">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ">
								<NavLink className="nav-link mx-3" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link mx-3" to="/jadwalsolat">
									Jadwal Sholat
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link mx-3" to="/reading/allsurat">
									Yuk Ngaji
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link mx-3" to="/">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link mx-3" to="/">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
