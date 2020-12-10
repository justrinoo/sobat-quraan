import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs>
              <h1>SOBAT QURAN</h1>
              <p>
                Sobat Quran adalah sebuah platform yang menyediakan fitur atau
                layanan membaca quraan, dan menyediakan jadwal solat serta
                artikel tentang islam:
              </p>
            </Col>
            <Col xs>
              <h1>FITUR KAMI</h1>
                <ul className="list-group">
                  <li className="list-group">Baca Al Quraan</li>
                  <li className="list-group mt-2">Jadwal Sholat</li>
                  <li className="list-group mt-2">Artikel Islami</li>
                </ul>
            </Col>
            <Col xs>
              <h1>HUBUNGI KAMI</h1>
              <p>sobatquraan@support.id</p>
            </Col>
          </Row>
          <div className="text-center">
              <p className="text-muted">Sobat Quran adalah Aplikasi Karya Anak Bangsa.</p>
              <p className="">© 2020 Sobat Quraan. All rights reserved.</p>
          </div>
        </Container>
      </Fragment>
    );
  }
}
