import React from "react";
import { Row } from "react-bootstrap";
import logo from './img/meet-logo-192.png';

function Header(props) {
  return (
    <header>
      <Row>
        <h1 className="header-logo">
          <img src={logo} alt="Meet Logo" />
        </h1>
      </Row>
    </header>
  );
}

export default Header;