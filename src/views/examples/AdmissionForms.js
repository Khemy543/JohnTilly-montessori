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
  Label,
  FormGroup,
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
import { Animated } from "react-animated-css";

function AdmissionForms() {
    const [wardHide , setWardHide] = React.useState(true);
    const [gaurdHide, setGuardHide] = React.useState(false);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const handleWardSubmit=(e)=>{
    e.preventDefault();
    setWardHide(false);
    setGuardHide(true)
  }
  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section">
        {wardHide?
        <Animated animationOut="bounceOutRight" isVisible={wardHide}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="text-center">Admission Forms</h2>
                <Form className="contact-form" onSubmit={handleWardSubmit}>
                  <Row>
                    <Col md="12">
                      <label>First Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Surname</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Surname" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Nationality</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nationality" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Age</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Age" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Sex</label>
                        <Row>
                            <Col>
                                <FormGroup check required>
                                <Label check>
                                    <Input value="Male" type="radio" name="sex" />{' '} Male
                                </Label>
                                </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup check>
                            <Label check>
                                <Input value="Female" type="radio" name="sex" />{' '} Female
                            </Label>
                            </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="12">
                      <label>Program of Choice</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Program" type="select" required>
                            <option>Creche</option>
                            <option>Nursery & Kindergarten</option>
                            <option>Primary School</option>
                        </Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <Button type="submit" style={{
                          backgroundColor:"transparent",
                          borderColor:"transparent",
                          color:"black"
                      }}>
                        Next <i className="fa fa-chevron-right"/>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
          </Animated>
          :
          <></>
        }

        {gaurdHide?
        <Animated animationOut="bounceOutRight" isVisible={gaurdHide}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="text-center">Gaurdian Information</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="12">
                      <label>First Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Surname</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Surname" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Occupation</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Occupation" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Residential Address</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Residential Address" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Telephone Number</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Telephone Number" type="text" required/>
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" required/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="12">
                      <Button className="btn-fill" color="danger" size="lg" block>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
          </Animated>
          :
          <></>
        }
        </div>
        </div>
      <DemoFooter />
      <Footer />
    </>
  );
}

export default AdmissionForms;
