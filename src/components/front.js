import React from 'react';
import Particles from 'react-particles-js'
import { Link, animateScroll as scroll } from "react-scroll";

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  },
   "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      },
  "onclick": {
    "enable": true,
    "mode": "push"
  }
}


export default class Front extends React.Component{
  constructor(){
    super();
    this.state = {
      menuToggle: false
    }

  }


	render(){
		return(
			<div id="front">

        <div className="header">
          <p>Andreas Sujono</p>

          <div className="toggle" >
            <i className="fa fa-bars" onClick = {
            () => {
               this.setState(prevState => {return {menuToggle:!prevState.menuToggle} })
            }
          }></i>
          </div>
        </div>

        <div className='menu-toggle' style= {
          this.state.menuToggle ? {opacity:1,visibility:'visible'} : {opacity:0,visibility:'hidden'}
        }>
          <div>
               <Link
                activeClass="active"
                to="front"
                spy={true}
                smooth={true}
                offset={-50}>
                <img src="./static/logo.png" alt="Logo" />
                </Link>
          </div>
          <div>
            <p> <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}>
            About Me </Link></p>
          </div>

          <div>
            <p> <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}>
                Projects </Link></p>
          </div>

          <div>
            <p> <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}>
                Skills </Link> </p>
          </div>

          <div>
            <p> <Link
                activeClass="active"
                to="contactScroll"
                spy={true}
                smooth={true}
                offset={-200}>
                Contact </Link></p>
          </div>

        </div>

        <div className="logo-animation">
          <div className="bundle">
            <div className="stroke1">
            </div>
            <div className="stroke2">
            </div>
            <div className="stroke3">
            </div>
            <div className="stroke4">
            </div>
            <div className="stroke5">
            </div>
          </div>
        </div>

				<Particles className='particles' params={particlesOptions} />

        
        <div className="arrow-down">
          <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}><span className="fa fa-angle-double-down"></span>
          </Link> 
        </div>
        



			</div>
		);
	}
}