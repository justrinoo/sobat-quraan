import React from "react";
import ImageHero from "../../assets/images/image-hero.png";
import { Bounce, Zoom } from "react-reveal";
function Hero() {
	return (
		<>
		{/* Desktop */}
			<div className="d-none d-md-block">
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-5" style={{ marginTop: "50px" }}>
						<Bounce left key={250}>
							<h3 className="font-weight-bold" style={{ lineHeight: "35px" }}>
								"Sesungguhnya kita adalah milik allah dan sungguh kepada dia
								kita akan kembali"
							</h3>
						</Bounce>
						<Bounce left key={450}>
							<p className="font-weight-light mt-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
								quod labore excepturi
							</p>
						</Bounce>
						<Zoom top key={2000}>
							<div className="d-flex">
								<button className="btn btn-primary mt-3">
									Feature
								</button>
								<button className="btn  btn-primary  ml-1 mt-3">
									Baca Al-Quraan
								</button>
							</div>
						</Zoom>
					</div>
					<div className="col-md-7">
						<Bounce right key={450}>
						<img
							src={ImageHero}
							className="img-fluid mx-5"
							style={{ width: "80%", height: "90%" }}
							alt="Responsive"
						/>
						</Bounce>
					</div>
				</div>
			</div>
			</div>

			{/* Mobile */}
			<div className="d-sm-block d-md-none">
			<div className="container mt-5">
				<div className="row">
				<div className="col-md-7">
						<img
							src={ImageHero}
							className="img-fluid mx-5"
							style={{ width: "80%", height: "90%" }}
							alt="Responsive"
						/>
					</div>
					<div className="col-md-5" style={{ marginTop: "50px" }}>
						<Bounce left key={250}>
							<h3 className="font-weight-bold" style={{ lineHeight: "35px" }}>
								"Sesungguhnya kita adalah milik allah dan sungguh kepada dia
								kita akan kembali"
							</h3>
						</Bounce>
						<Bounce left key={450}>
							<p className="font-weight-light mt-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
								quod labore excepturi
							</p>
						</Bounce>
						<Zoom top key={2000}>
							<div className="d-flex mb-5">
								<button className="btn btn-primary mt-3">
									Feature
								</button>
								<button className="btn  btn-primary  ml-1 mt-3">
									Baca Al-Quraan
								</button>
							</div>
						</Zoom>
					</div>
				</div>
			</div>
			</div>
		</>
	);
}

export default Hero;
