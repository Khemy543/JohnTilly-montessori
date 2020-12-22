/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container,Col } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black text-center" style={{backgroundColor:"black"}}>
      <Container>
        <Row>
        <Col>
          <div className="credits ml-auto">
            <span className="copyright" style={{color:"white", fontWeight:500}}>
              © {new Date().getFullYear()} JohnTilly Montessori School
            </span>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
