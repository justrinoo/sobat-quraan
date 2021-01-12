import React, { useEffect, useState } from "react";
import axios from "axios";
import Bounce from "react-reveal/Bounce";
function DetailSurat(props) {
	const identifier = props.match.params.identifer;
	const [ayat, setAyat] = useState([]);
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState([]);
	const detailAyat = async () => {
		try {
			const response = await axios.get(
				`http://api.alquran.cloud/surah/${identifier}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setAyat(response.data.data.ayahs);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const detailSurat = async () => {
		try {
			const response = await axios.get(
				`http://api.alquran.cloud/surah/${identifier}/id.indonesian`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setDetail(response.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		detailAyat();
		detailSurat();
	}, [identifier]);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="justify-content-center mx-auto mt-5">
							<h5 className="text-center">{detail.englishName}</h5>
							<p className="text-center">{detail.englishNameTranslation}</p>
						</div>
						{loading && (
							<div className="justify-content-center mx-auto">
								<div className="spinner-border mt-5" role="status"></div>
								<span>Loading...</span>
							</div>
						)}
						{ayat.map((item, index) => (
							<Bounce right key={index}>
								<ul key={index} className="list-unstyled">
									<li className="text-right text-justify ">
										<small className="bg-dark rounded-circle text-white px-2 float-left">
											{item.numberInSurah}
										</small>
										&nbsp;&nbsp;
										<span style={{ fontSize: "26px" }}>{item.text}</span>
										<p className="text-left"></p>
									</li>
									<hr />
								</ul>
							</Bounce>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailSurat;
