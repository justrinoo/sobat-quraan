import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Bounce, Zoom } from "react-reveal";
import ImageHero from "../../assets/images/image-hero.png";
import jadwalSholat from "../../assets/images/jadwalSholat.svg";
import bacaArtikel from "../../assets/images/bacaArtikel.svg";

function feature() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="justify-content-between align-items-center">
          <div className="container">
            <Bounce left key={450}>
              <div className="py-5">
              <h3 className="text-center text-white">
                Kenapa Sobat Quran?
              </h3>

              <p className="text-center text-white">
              Sobatquran adalah program alquran digital yang memudahkan user untuk membaca alquran dimanapun dengan keuntungan seperti berikut:
              </p>
              </div>
            </Bounce>
          </div>
          <Zoom top key={2000}>
            <div className="row">
              <div className="col-lg col-md-4">
                <div className="card mb-3">
                  <img
                    src={ImageHero}
                    alt=""
                    style={{ height: "70%", width: "71%" }}
                    className="d-block m-auto py-lg-1 py-2"
                  />
                  <div className="card-body">
                    <h3 className="text-center font-weight-bold">Baca Quran</h3>
                    <p className="card-text text-center font-weight-light">
                      Ada 30 Juz dan 114 surah dan 6666 ayat yang siap untuk di
                      baca
                    </p>
                    <div className="text-center">
                      <Link
                        to="/reading/allsurat"
                        className=" text-warning font-weight-bolder"
                      >
                        Baca Quran
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-4">
                <div className="card mb-3">
                  <img
                    src={jadwalSholat}
                    alt=""
                    style={{ height: "100%", width: "80%" }}
                    className="d-block mx-auto py-lg-4 py-1"
                  />
                  <div className="card-body">
                    <h3 className="text-center font-weight-bold">
                      Jadwal Sholat
                    </h3>
                    <p className="card-text text-center font-weight-light">
                      Kami menyediakan jadwal sholat lengkap dari waktu subuh -
                      isya
                    </p>
                    <div className="text-center">
                      <Link to="/" className="text-warning font-weight-bolder">
                        Jadwal Sholat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-4">
                <div className="card mb-3">
                  <img
                    src={bacaArtikel}
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                    className="d-block m-auto justify-content-center py-lg-2 py-2"
                  />
                  <div className="card-body">
                    <h3 className="text-center font-weight-bold">
                      Baca Artikel
                    </h3>
                    <p className="card-text text-center font-weight-light">
                      Kami menyediakan artikel - artikel islami seperti kisah
                      nabi dan rasul
                    </p>
                    <div className="text-center">
                      <Link to="/" className="text-warning font-weight-bolder">
                        Baca Quran
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default feature;
