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
import React,{useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Footer from "components/Footers/Footer";
import { Link } from "react-router-dom";


const items = [
  {
    src: `${require('assets/img/carousel1.jpg')}`
    
  },
  {
    src: `${require('assets/img/carousel2.jpg')}`
  },
  {
    src: `${require('assets/img/carousel3.jpg')}`
  },
  {
    src: `${require('assets/img/carousel4.jpg')}`
  }
];


function LandingPage() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="text-center image-box">
        <img src={item.src} alt={item.altText} className="carousel-image"/>
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });


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
        <LandingPageHeader />
      <div className="main">
        <div className="section">
        <marquee behavior="scroll" scrollamount='13' direction="left" className="text-uppercase"
          style={{color:"red", fontWeight:500}}
        >ENROLL NOW!!! ADMISSION IN PROGRESS!!! ENROLL NOW!!! ADMISSION IN PROGRESS!!! ENROLL NOW!!! ADMISSION IN PROGRESS!!! ENROLL NOW!!! ADMISSION IN PROGRESS!!! 
        </marquee>
          <Container>
            {/* <h4 className="text-center text-uppercase head-title">About Us</h4> */}
            <Row>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
              <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/about2.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="head-title text-uppercase text-center" style={{fontSize:"19px", color:"#dd9933"}}>Welcome To JohnTilly Montessori</h3>
                    <br/>
                    <h5 className="card-description" style={{fontSize:"16px"}}>
                    We believe children have been created to do good works. Our job is to help them discover their purpose, so 
                    they can achieve their full potential. Our learning programmes offer children rewarding learning experiences that help them 
                    succeed in their education, careers and to make positive contributions to their families and communities.
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </Container>

            {/* <SectionCarousel /> */}
            <div className="section"> 
              <Container>
              <div className="text-center">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              </div>
              </Container>
            </div>

            <Container>
              <Row>
                <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/head1.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="head-title text-uppercase text-center" style={{fontSize:"19px", color:"#dd9933"}}>WE AIM TO INSPIRE</h3>
                    <br/>
                    <h5 style={{fontSize:"16px"}} className="card-description">
                    JohnTilly uses a a system of education for youa system of education for young children that aims to inspire.
                    </h5>
                  </CardBody>
                </Card>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
              <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain">
                  <CardBody>
                    <h3 className="head-title text-uppercase text-center" style={{fontSize:"19px", color:"#dd9933"}}>Dear kids, you matter!</h3>
                    <br/>
                    <h5 style={{fontSize:"16px"}} className="card-description">
                    Play forms an integral part in a child’s development and here at John-Tilly we help children expand their creative talents.
                    </h5>
                  </CardBody>
                </Card>
                </Col>
                <Col md="6" lg="6" xl="6" xs="12" sm="12">
                <Card className="card-plain" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/about3.jpg')} style={{borderRadius:"0px"}}/>
                </Card>
              </Col>
              </Row>
            </Container>

            <Container>
            <h4 className="text-center text-uppercase head-title">Our Programmes</h4>
            <Row>
              <Col md="4">
                <Card className="card-plain card-main" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/creche.jpg')} style={{borderRadius:"0px"}}/>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head">CRECHE & KINDERGARTEN</h3>
                    <br/>
                    <h5 className="card-description">
                    The curriculum applied to creche and kindergarten utilizes hands-on learning and 
                    collaborative play balanced with education to makes learning fun and easily digestible.
                    </h5>
                    <br/>
                    <Button
                      className="card-button"
                      outline
                      tag={Link}
                      to="/admission-forms"
                    >
                      Apply Now  <i class="nc-icon nc-minimal-right" style={{fontWeight:"bold"}}/>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain card-main" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/nursery.jpg')} style={{borderRadius:"0px"}}/>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h3 className="card-head">NURSERY</h3>
                    <br/>
                    <h5 className="card-description">
                    The nursery curriculum is child-centered and is tailored according to each individual’s needs to 
                    enable each child to reach their full potential.
                    </h5>
                    <br/>
                    <br/>
                    <Button
                      className="card-button"
                      outline
                      tag={Link}
                      to="/admission-forms"
                    >
                      Apply Now  <i class="nc-icon nc-minimal-right" style={{fontWeight:"bold"}}/>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain card-main" style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardImg top src={require('assets/img/primary.jpg')} style={{borderRadius:"0px"}}/>
                  <CardBody style={{padding:"20px 20px"}}>
                    <h4 className="card-head">PRIMARY</h4>
                    <br/>
                    <h5 className="card-description">
                    The primary school teaches a wide range of subjects including art activities that enables 
                    independence in exploring ideas.
                    </h5>
                    <br/>
                    <br/>
                    <br/>
                    <Button
                      className="card-button"
                      outline
                      tag={Link}
                      to="/admission-forms"
                    >
                      Apply Now  <i class="nc-icon nc-minimal-right" style={{fontWeight:"bold"}}/>
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

export default LandingPage;
