import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Header/Navigation";
import "./index.css";

function index() {
	return (
		<>
			<Navigation />
			<div
				class="jumbotron jumbotron-fluid jumbo-image"
				style={{ height: "350px" }}
			>
				{/* navbar */}
			</div>

			<div className="container card-solat">
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Imsak</div>
							<div class="col-4">04:31</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Subuh</div>
							<div class="col-4">04:41</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Terbit</div>
							<div class="col-4">05:56</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Dzuhur</div>
							<div class="col-4">11:57</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Ashar</div>
							<div class="col-4">15:19</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Maghrib</div>
							<div class="col-4">17:57</div>
						</div>
					</div>
				</div>
				<div class="card mt-5">
					<div class="card-body">
						<div class="row">
							<div class="col-8">Isya</div>
							<div class="col-4">19:06</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default index;
