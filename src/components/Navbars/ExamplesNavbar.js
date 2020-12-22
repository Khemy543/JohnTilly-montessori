import React from "react";
import { NavLink as RRNavLink, Link  } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  /* React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }); */
  return (
    <Navbar
      className="fixed-top"
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="John Tilly"
            tag={Link}
          >
            <img 
              src={require('assets/img/logo.jpg')}
              style={{
                width:"130px",
                height:"auto",
                marginTop:"-15px",
                marginBottom:"-15px"
              }}
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/home" className="nav-link" activeClassName="active" exact path="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/about-us" className="nav-link" activeClassName="active" exact path="/about-us">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/academics" className="nav-link" activeClassName="active" exact path="/academics">
                Academics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/admissions" className="nav-link" activeClassName="active" exact path="/admissions">
                Admissions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/programmes" className="nav-link" activeClassName="active" exact path="/programmes">
                Programmes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/contact-us" className="nav-link" activeClassName="active" exact path="/contact-us">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
