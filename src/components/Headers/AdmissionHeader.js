import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Button
} from 'reactstrap'

// core components

function AdmissionHeader() {
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
        id="admission-head"
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-uppercase text-center">
            <h1 style={{fontWeight:500,marginTop:"70px"}}>Proceedure and Requirements</h1> 
            <br/>
            <Button
              className="btn-round mr-1"
              color="danger"
              tag={Link}
              to="/admission-forms"
            >
              Enroll Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AdmissionHeader;
