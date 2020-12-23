import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { Link } from 'react-router-dom'
 
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require('assets/img/head1.jpg') + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-uppercase">
            <h1 style={{fontWeight:500}} data-aos="slide-right" data-aos-delay="200">I DON'T LOVE STUDYING <br/>I LOVE LEARNING</h1> 
            <br/>
            <div data-aos="slide-right" data-aos-delay="400">
            <Button
              className="btn-round mr-1 one"
              color="neutral"
              outline
              tag={Link}
              to="/admission-forms"
            >
              Enroll
            </Button>
            <Button className="btn-round two" color="neutral" type="button" outline
            >
              Programmes
            </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
