import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
function ListSurat(props) {
	const { data } = props;

	return (
		<>
			<div className="col-md-3 mt-5">
				<Zoom top key={data.number}>
					<div className="card" key={data.number}>
						<div className="card-body">
							<span>{data.number}</span>
							<h5>{data.englishName}</h5>
							<p>{data.numberOfAyahs} Ayat</p>
							<Link to={`/detail/${data.number}`}>
								Baca Surat {data.englishName}
							</Link>
						</div>
					</div>
				</Zoom>
			</div>
		</>
	);
}

export default ListSurat;
