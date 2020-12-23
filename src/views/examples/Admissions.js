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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import Footer from "components/Footers/Footer";
import ContactUsHeader from "components/Headers/ContactUsHeader";
import AdmissionHeader from "components/Headers/AdmissionHeader";

function Admissions() {
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
        <AdmissionHeader /> 
      <div className="main">
        <div className="section">
        <Container style={{marginBottom:"20px"}}>
            <Row>
              <Col md="6">
                <Card className="card-plain card-main" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head text-uppercase">Admission Proceedure</h3>
                    <br/>
                    <h5 className="card-description" style={{ fontWeight:600}}>
                        <i className="fa fa-sign-in mr-2"/>Fill out the application form and all 
                        other necessary forms. Submit with all other required documents <br/><br/>
                        <i className="fa fa-sign-in mr-2"/>After submitting the documents, the Entrance Exam will be followed.<br/><br/>
                        <i className="fa fa-sign-in mr-2"/>With the entrance exam result, interviews for a student and parents will be followed.<br/><br/>
                        <i className="fa fa-sign-in mr-2"/>Through the interview, the child’s placement will be notified to the parent.
                    </h5>
                    <br/>
                    <br/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-main" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head text-uppercase">Admission Requirements</h3>
                    <br/>
                    <h5 className="card-description" style={{ fontWeight:600}}>
                    <i className="fa fa-sign-in mr-2"/>If the child completed a certain Kindergarten level or Primary School grade, 
                    but the child’s age is younger than the prospective age, then the child’s previous school 
                    transcript should be submitted and the child should achieve satisfactory level from the Entrance Exam and 
                    assessment procedure for that grade.<br/><br/>
                    <i className="fa fa-sign-in mr-2"/>For transferred students, a testimonial letter and grade
                     report from the previous school should be submitted.<br/><br/>
                    </h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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

export default Admissions;
