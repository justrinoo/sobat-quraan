import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import LogoQuran from "../assets/images/logo.png";
import LogoJam from "../assets/images/jam.png";
import LogoArtikel from "../assets/images/artikel.png";

export default class WhySobat extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div
            style={{
              background: "#3E90FF",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "100px",
                background: "white",
                margin: "auto",
              }}
            ></div>
            <h3 className="text-white">Kenapa Sobat Quran?</h3>
            <Container>
              <Row>
                <Col className="mb-3">
                  <Card style={{ width: "18rem" }}>
                    <div
                      style={{
                        height: "168px",
                        width: "182px",
                        background:
                          "linear-gradient(to bottom, #ffffff 20%, #FD9357 100%)",
                        border: "2px solid #1BC47D",
                        margin: "20px auto",
                      }}
                    >
                      <img src={LogoQuran} alt="..." className="mt-3" />
                    </div>
                    <Card.Body>
                      <Card.Title>Baca Alqur'an</Card.Title>
                      <Card.Text>
                        Ada 30 Juz dan 114 surah dan 6666 ayat yang siap untuk
                        di baca
                      </Card.Text>
                      <Link to="/" style={{ color: "#FDA26F" }}>
                        Read More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-3">
                  <Card style={{ width: "18rem" }}>
                    <div
                      style={{
                        height: "168px",
                        width: "182px",
                        background:
                          "linear-gradient(to bottom, #ffffff 20%, #FD9357 100%)",
                        border: "2px solid #1BC47D",
                        margin: "20px auto",
                      }}
                    >
                      <img src={LogoJam} alt="..." className="mt-3" />
                    </div>
                    <Card.Body>
                      <Card.Title>Jadwal Sholat</Card.Title>
                      <Card.Text>
                        Kami menyediakan jadwal sholat lengkap dari waktu subuh
                        - isya
                      </Card.Text>
                      <Link to="/" style={{ color: "#FDA26F" }}>
                        Read More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <div
                      style={{
                        height: "168px",
                        width: "182px",
                        background:
                          "linear-gradient(to bottom, #ffffff 20%, #FD9357 100%)",
                        border: "2px solid #1BC47D",
                        margin: "20px auto",
                      }}
                    >
                      <img src={LogoArtikel} alt="..." className="mt-4" />
                    </div>
                    <Card.Body>
                      <Card.Title>Artikel Islami</Card.Title>
                      <Card.Text>
                        Kami menyediakan artikel - artikel islami seperti kisah
                        nabi dan rasul
                      </Card.Text>
                      <Link to="/" style={{ color: "#FDA26F" }}>
                        Read More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}
