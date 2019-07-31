import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';


export default class About extends Component{
	constructor(){
		super()
	}


	render(){
		return(
			<div className="about" id="about">

				<div className="header">
					<p> About Me </p>
				</div>

				<Fade>
				<div className="row " style={{width:'90%',margin:'auto'}}>
					<div className="side-left col-lg-5 col-md-12 col-12">
						<div className="photo">
							<img src="./static/photoAndreas.jpg" alt="myPhoto" />
						</div>

					</div>

					<div className="side-right col-lg-6 col-md-12 col-12">

						<div className="main-right">
						<p>
						Hello people, my name is Andreas Sujono. I am 19 years old and currently
						studying in Nanyang Technological University (NTU) Singapore with Electrical and Electronic
						Engineering Major. 
						</p>
						<p>
						I am really interested in Web programming, both front end and back end development.
						Like this website for example, I built it in scratch by myself using reactJs.
						If you want to know more about me, you can chek out my contact below
						</p>
						</div>


						<div className="box_shadow"> </div>

					</div>

				</div>
				</Fade>




			</div>


		);
	}
}



