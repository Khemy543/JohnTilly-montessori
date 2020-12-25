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
import { Link } from 'react-router-dom'

// reactstrap components
import { Row, Container,Col } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer" style={{backgroundColor:"rgb(204 124 63)"}}>
      <Container>
        <Row>
        <Col>
          <nav className="footer-nav" >
            <ul>
              <li style={{textAlign:"left"}}>
                <Link
                  to="!#"
                  style={{fontSize:"16px"}}
                >
                  Stay in touch with us
                </Link>
                <Link
                  to="/contact-us"
                >
                 <i className="fa fa-location-arrow mr-2"/> Ningo, Prampram
                </Link>
                <a
                  href="mailto://johntillymontessori@gmail.com​"
                  className="text-lowercase"
                >
                  <i className="fa fa-envelope mr-2"/>johntillymontessori@gmail.com​
                </a>
                <a
                  href="tel://+233556875163"
                >
                  <i className="fa fa-phone mr-2"/>+233 55 687 5163
                </a>
              </li>
            </ul>
          </nav>
          </Col>
          <Col>
            <div style={{textAlign:"center"}}>
            <img src={require('assets/img/logo-footer.png')} style={{height:"100px", width:'auto', marginTop:"20px"}}/>
            </div>
          </Col>

          <Col>
          <nav className="footer-nav">
            <ul>
              <li style={{textAlign:"left"}}>
                <Link
                  to="!#"
                  style={{fontSize:"16px"}}
                >
                  JohnTilly Montessori School
                  
                </Link>
                <Link
                  to="/home"
                >
                  <i className="fa fa-home mr-2"/>Home
                </Link>
                <Link
                  to="/admissions"
                >
                  <i className="fa fa-graduation-cap mr-2"/> Admissions
                </Link>
                <Link
                  to="/programmes"
                >
                  <i className="fa fa-tasks mr-2"/>Programmes
                </Link>
              </li>
            </ul>
          </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
