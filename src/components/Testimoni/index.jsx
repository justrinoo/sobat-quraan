import React from "react";
import TestiImage from "../../assets/images/image-hero.png";

export default function Testi() {
  return (
    <>
      <div className="jumbotron mt-3">
        <div className="container">
          <h3 className="mb-4">Pendapat Mereka Tentang Sobat Qur'an?</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mb-3">
                <div className="card-body py-4">
                  <p>
                    Sobat Qur'an ini sangat membantu saya untuk belajar dan
                    membaca al quran dengan efisien dan mudah dan ga cuma ituu
                    di sobat quran ini kita bisa membaca artikel islami dengan
                    itu kita bisa menambah ilmu tentang islam.
                  </p>
                  <div className="d-flex">
                    <img
                      src="https://placeimg.com/200/200/people"
                      width="80"
                      height="80"
                      className="rounded-circle"
                      alt=""
                    />
                    <p className="mx-4 mt-4 font-weight-bold">Muhamad Ryan Hidayat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-3">
                <div className="card-body py-3">
                  <p>
                    Aplikasi ini sangat membantu saya untuk membaca alquran
                    melalui handphone dan juga diaplikasi ini tersedia jadwal
                    sholat dan artikel islami yang mempermudah kita untuk
                    mengetahui jadwal sholat terbaru dan menambah ilmu tentang
                    agama islam
                  </p>
                  <div className="d-flex">
                    <img
                      src="https://placeimg.com/200/200/people"
                      width="80"
                      height="80"
                      className="rounded-circle"
                      alt=""
                    />
                    <p className="mx-4 mt-3 font-weight-bold">Akmal Widad Iskandar</p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col">
              <div className="card mb-3">
                <div className="card-body py-4">   
                  <p>
                  Dengan aplikasi ini memudahkan banyak orang untuk membaca alquran dan melihat jadwal sholat, cocok banget untuk orang yang sedang diluar rumah dapat menggunakan aplikasi ini dengan mudah 
                  </p>
                  <div className="d-flex">
                    <img
                      src="https://placeimg.com/200/200/people"
                      width="80"
                      height="80"
                      className="rounded-circle"
                      alt=""
                    />
                    <p className="mx-4 mt-4 font-weight-bold">M Ferdinan Zamtu Roikqhan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
