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
import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Footer from "components/Footers/Footer";
import AcademicHeader from "components/Headers/AcademicHeader";

function Academic() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <AcademicHeader /> 
      <div className="main">
        <div className="section">
        <Container>
            <Row style={{marginTop:"20px"}}>
              <Col md="6" lg="6" xl="6" sm="12" xs="12">
              <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/academicpage.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              <Col md="6" lg="6" xl="6" sm="12" xs="12">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="head-title text-uppercase text-center" style={{fontSize:"30px", color:"#dd9933"}}>Academics in JohnTilly Montessori</h3>
                    <br/>
                    <h5 style={{fontSize:"17px"}} className="card-description">
                    John-Tilly Montessori dedicates to excellence of education both academically and artistically. 
                    We teach the students to imbibe knowledge in healthy ways. We utilizes a disciplined model of education, enabling students to
                     judge and perform based on finely tuned faculties. 
                    John-Tilly offers strong programmes in academics, student leadership, and service.
                    </h5>
                    <br/>
                    <Button
                        color="danger"
                        className="btn-round"
                        tag={Link}
                        to="/admission-forms"
                    >
                        Enroll Now
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </Container>
        </div>
        </div>
      <DemoFooter />
      <Footer />
    </>
  );
}

export default Academic;
