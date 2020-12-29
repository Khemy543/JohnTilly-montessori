import React from "react";
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
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
            <Row style={{marginTop:"20px", overflowX:"hidden"}}>
              <Col md="6" lg="6" xl="6" xs="12" sm="12" data-aos="fade-right">
              <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/owner.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              <Col md="6" lg="6" xl="6" xs="12" sm="12" data-aos="fade-left">
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
        <div className="section  text-center">
          <Container>
            <h2 className="head-title text-uppercase text-center" style={{fontSize:"30px"}}>Meet The Team</h2>
            <Row>
              <Col md="4" sm="6" xs="6" data-aos="fade-up" data-aos-delay="100">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/rose.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Mrs. Rose Kpesese</CardTitle>
                        <h6 className="card-category">Chairperson and Founder</h6>
                      </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6" data-aos="fade-up" data-aos-delay="100">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/ethel.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Miss Ethel Kpesese</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6" data-aos="fade-up" data-aos-delay="100">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/richard.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Mr Richard Gyimah</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6" data-aos="fade-up" data-aos-delay="100">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/christine.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Mrs. Christine Pi-Bansa</CardTitle>
                        <h6 className="card-category">Administrator</h6>
                      </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6" xs="6" data-aos="fade-up" data-aos-delay="100">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/konde.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Konde Jein Joshua</CardTitle>
                        <h6 className="card-category">Board Member</h6>
                      </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
        <Container>
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
        </div>
      <DemoFooter />
      <Footer />
    </>
  );
}

export default AboutPage;
