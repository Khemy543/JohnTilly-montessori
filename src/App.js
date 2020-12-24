import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import './index.css'
// pages
import LandingPage from "views/examples/LandingPage.js";
import AboutPage from "views/examples/AboutPage";
import ContactUs from "views/examples/ContactUs";
import Admissions from "views/examples/Admissions";
import Academic from "views/examples/Academic";
import SrollToTop from "react-router-scroll-top";
import ourProgrammes from "views/examples/OurProgrammes";
//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import AdmissionForms from 'views/examples/AdmissionForms';

class App extends React.Component {
    constructor(props){
        super(props);
      }

    authenticate(){
      return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
    }
      
    componentDidMount(){
      this.authenticate().then(() => {
        const ele = document.getElementById('ipl-progress-indicator')
        if(ele){
          // fade out
          ele.classList.add('available')
          setTimeout(() => {
            // remove from DOM
            ele.outerHTML = ''
          }, 2500)
        }
      })


      AOS.init({
          duration: 1000
      })
  }
    render(){
      return(
        <BrowserRouter>
        <SrollToTop/>
         <Switch>
           <Route path="/admission-forms" component={AdmissionForms}/>
           <Route path="/programmes" component={ourProgrammes}/>
           <Route path="/academics" component={Academic}/>
           <Route path="/admissions" component={Admissions}/>
           <Route path="/contact-us" component={ContactUs}/>
           <Route path="/about-us" component={AboutPage}/>
           <Route path="/" component={LandingPage}/>
         </Switch>
       </BrowserRouter>
      );
    }
  }

  export default App;
  