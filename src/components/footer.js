import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

export default class Footer extends Component{
	constructor(){
		super();

		this.state = {
			phone: false,
			email:false
		}
	}

	render(){

		return(
			<div className="footer" id="contactScroll">
				
				<Fade>
				<div className="side-left">
					<h2>Contact</h2>
					<span className="fa fa-phone" onClick={() => 
						this.setState(prevState => {return {
								phone: !prevState.phone,
								email:false
							}
						}
						)
					}>
						</span> 

					<a href="https://www.facebook.com/andreas.sujono.543" target="_blank">
						<span className="fa fa-facebook-square facebok"></span>
					</a>

					<a href="https://www.instagram.com/andreassujono/" target="_blank">
						<span className="fa fa-instagram instagram"></span> 
					</a>

					<span className="fa fa-envelope" onClick={() => 
						this.setState(prevState => {return {
								phone: false,
								email:!prevState.email
							}
						}
						)
					}> </span>	


					<a href="https://www.linkedin.com/in/andreas-sujono-5b0b07164/" target="_blank">
						<span className="fa fa-linkedin" ></span>
					</a>
					<a href="https://github.com/Andreas-Sujono" target="_blank">
						<span className="fa fa-github"></span>
					</a>
					

					
				</div>
				</Fade>

				
				<div className="boxOver">
					{this.state.email ? <span>	email: andreassujono@gmail.com </span> : null}
					{this.state.phone ? <span>	phone: +65 83066172 </span> : null}
				</div>




				<div className="bottom">
					<p>Created with &nbsp;&nbsp; <i className="fa fa-heart"></i>&nbsp;&nbsp;&nbsp;&nbsp;by Andreas Sujono</p>


				</div>


			</div>
		);

	}
}