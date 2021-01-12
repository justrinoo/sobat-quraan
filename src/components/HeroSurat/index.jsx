import React, { useEffect, useState } from "react";
import ListSurat from "./ListSurat";
import axios from "axios";

export default function ParentSurat() {
	const [search, setSearch] = useState("");
	const [result, setResult] = useState([]);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const getResults = async () => {
		try {
			const response = await axios.get("http://api.alquran.cloud/surah", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			setResult(response.data.data);
		} catch (error) {
			console.log(error.mesage);
		}
	};

	const getFilterSurat = result.filter((item) => {
		return item.englishName.toLowerCase().includes(search.toLowerCase());
	});
	useEffect(() => {
		getResults();
	}, [search]);

	return (
		<>
			<div className="container">
				<div className="mx-auto justify-content-center d-flex mt-5">
					<div className="col-md-6">
						<h5 className="text-center">Mencari Surat AlQuraan</h5>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								value={search}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					{getFilterSurat.length > 0 ? (
						getFilterSurat.map((item) => <ListSurat data={item} />)
					) : (
						<>
							<div className="justify-content-center mx-auto">
								<div className="spinner-border mt-5" role="status"></div>
								<span>Loading...</span>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
