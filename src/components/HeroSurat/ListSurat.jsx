import React from "react";
import { Link } from "react-router-dom";
function ListSurat(props) {
	const { data } = props;
	return (
		<>
			<div className="col-md-3 mt-5">
				<div className="card">
					<div className="card-body">
						<span>{data.nomor}</span>
						<h5>{data.name}</h5>
						<p>{data.ayat} Ayat</p>
						<Link to={data.nomor}>Baca Surat {data.name}</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ListSurat;
