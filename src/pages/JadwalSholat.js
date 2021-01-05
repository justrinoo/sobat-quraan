import React, { Component, Fragment } from "react";
import Axios from "axios";
import { Table } from 'react-bootstrap'

export default class JadwalSholat extends Component {
  userLocation = () => {
    if (!navigator.geolocation) {
      alert(
        "Geolocation tidak didukung dibrowser anda, silahkan coba dibrowser lain."
      );
    } else {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  };

  success = (position) => {
    this.getAPIprayer(position.coords.latitude, position.coords.longitude);
  };

  error = () => {
    // default menggunakan kordinat jakarta
    this.getAPIprayer("-6.200000", "106.816666");
  };

  getAPIprayer = (latitude, longitude) => {
    Axios.get(
      "http://api.aladhan.com/v1/calendar?latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&method=2"
    ).then((res) => {
      console.log(res);
    });
  };

  componentDidMount() {
    this.userLocation();
    this.getAPIprayer();
  }

  render() {
    return (
      <Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}
