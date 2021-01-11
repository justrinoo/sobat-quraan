import React, { useEffect, useState } from "react";
import ListSurat from "./ListSurat";
import axios from "axios";

export default function ParentSurat() {
	const [search, setSearch] = useState("");
	const [result, setResult] = useState([]);
	const getSearchResult = async () => {
		try {
			const response = await axios.get(
				`https://api.banghasan.com/quran/format/json/surat`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setResult(response.data.hasil);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getSearchResult();
	}, [search]);

	return (
		<>
			<div className="container">
				<div className="mx-auto justify-content-center d-flex mt-5">
					<div className="col-md-6">
						<h5 className="text-center">Mencari Surat AlQuraan</h5>
						<div class="input-group">
							<input
								type="text"
								class="form-control"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					{result.length > 0 ? (
						result.map((item) => <ListSurat data={item} />)
					) : (
						<h5 className="text-center">Loading...</h5>
					)}
				</div>
			</div>
		</>
	);
}
