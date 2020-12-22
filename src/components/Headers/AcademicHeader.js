import React from "react";

// reactstrap components
import {
  Container,
  Button
} from 'reactstrap'

// core components

function AcademicHeader() {
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
        id="academic-head"
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-uppercase text-center" style={{marginTop:"-50px"}}>
            <h1 style={{fontWeight:500}}>Academics</h1> 
            <br/>{/* 
            <Button
              className="btn-round mr-1 one"
              color="neutral"
              outline
            >
              Enroll
            </Button>
            <Button className="btn-round two" color="neutral" type="button" outline
            >
              Programmes
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default AcademicHeader;
