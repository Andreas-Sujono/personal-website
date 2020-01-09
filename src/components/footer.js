import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

export default class Footer extends Component{

	render(){

		return(
			<div className="footer" id="contactScroll">
				
				<Fade>
				<div className="side-left">
					<h2>Contact</h2>
			
					<a href="https://www.facebook.com/andreas.sujono.543" target="_blank">
						<span className="fa fa-facebook-square facebok"></span>
					</a>

					<a href="https://www.instagram.com/andreassujono/" target="_blank">
						<span className="fa fa-instagram instagram"></span> 
					</a>

					<a href="mailto:andr0075@e.ntu.edu.sg">
						<span className="fa fa-envelope"> </span>	
					</a>


					<a href="https://www.linkedin.com/in/andreas-sujono-5b0b07164/" target="_blank">
						<span className="fa fa-linkedin" ></span>
					</a>
					<a href="https://github.com/Andreas-Sujono" target="_blank">
						<span className="fa fa-github"></span>
					</a>
					
				</div>

				<div className="side-center">
					<span> Email : ANDR0075@e.ntu.edu.sg </span>
					<br/>
					<span> Phone: +65 83066172 </span>

				</div>
				</Fade>

				<div className="bottom" style={{textAlign:'center'}}>
					<p>Created with &nbsp;&nbsp; <i className="fa fa-heart"></i>&nbsp;&nbsp;&nbsp;&nbsp;by Andreas Sujono</p>


				</div>


			</div>
		);

	}
}