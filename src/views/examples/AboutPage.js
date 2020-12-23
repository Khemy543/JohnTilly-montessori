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

function AboutPage() {
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
      <ProfilePageHeader />
      <div className="main">
        <div className="section">
          <Container>
            <Row style={{marginTop:"20px"}}>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
              <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/owner.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="head-title text-uppercase text-center" style={{fontSize:"30px", color:"#dd9933"}}>Welcome To JohnTilly Montessori</h3>
                    <br/>
                    <h5 style={{fontSize:"17px"}} className="card-description">
                    We believe the education received during the formative years of children play an invaluable
                     role in shaping the strength of their mental faculties and well as how well they integrate into society.  
                     Quality education has a direct effect on a child’s cognitive
                     abilities and here at John-Tilly Montessori, we tailor our curriculum to enhance intellectual and scholastic abilities.
                    </h5>
                    <br/>
                    <Button
                        color="danger"
                        className="btn-round"
                    >
                        Enroll Now
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </Container>
           
        </div>
        <div className="section  text-center">
          <Container>
            <h2 className="head-title text-uppercase text-center" style={{fontSize:"30px"}}>Meet The Team</h2>
            <Row>
              <Col md="4" sm="6" xs="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/rose.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mrs. Rose Kpesese</CardTitle>
                        <h6 className="card-category">Chairperson and Founder</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/ethel.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Miss Ethel Kpesese</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/richard.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mr Richard Gyimah</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/christine.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Mrs. Christine Pi-Bansa</CardTitle>
                        <h6 className="card-category">Administrator</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/konde.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Konde Jein Joshua</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his 
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{marginBottom:"20px"}}>
            <Row>
              <Col md="4">
                <Card className="card-plain card-outer" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head text-uppercase">Mission Statement</h3>
                    <br/>
                    <h5 className="card-description">
                    To provide  the highest quality education to our pupils st the basic level by providing  a happy and a caring environment  and focusing on the individual
                      needs of the child intellectually,  socially,morally,spiritually  and physically.
                    </h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain card-middle" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)", margin:"-18px", height:"420px"}}>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h4 className="card-head text-uppercase">Core Values</h4>
                    <br/>
                    <h5 style={{color:"white", fontWeight:600, fontSize:"15px"}}>
                    <b>Quality</b> – We aim to provide a a distinctive degree of excellence<br/>

                    <b>Passion</b> – We incite love and enthusiasm for learning<br/>

                    <b>Team work</b> – We foster togetherness and teach its value and efficiency.<br/>

                    <b>Customer commitment</b> – We are committed to providing the best relationships to parents of wards.<br/>

                    <b>Respect</b> – We show deep regard for the feelings, wishes, rights and beliefs of others<br/>

                    <b>Discipline</b> – We strive to instill good behavior and an acceptable code of conduct
                    </h5>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain card-outer" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head text-uppercase">Vision Statement</h3>
                    <br/>
                    <h5 className="card-description">
                    To be looked  up to as a beacon of excellent  education  within  the region  and beyond.
                    </h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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
      <DemoFooter />
      <Footer />
    </>
  );
}

export default AboutPage;
