import React, {Component} from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default class Skills extends Component{
	constructor(){
		super()
	}

	render(){

		return(
			<div className="skills" id="scrolls" >

				<div className="header"> Skills </div>

				<Bounce>
				<div className="skillList">
					<div> <strong> Front End </strong> : HTML, CSS, SASS, Javascript, Bootstrap, ReactJs</div>
					<div> <strong> Back End </strong> : C, Python, Flask, NodeJs, ExpressJs </div>
					<div> <strong> DataScience </strong> : Numpy, Pandas, Matplotlib, Seaborn, Pytorch </div>
					<div> <strong> Others </strong> : Unity3D, Arduino, Adobe Premiere </div>
				</div>
				</Bounce>

				<div className="skillImage row container" >

					<Fade bottom>
					<div className="col-md-4  col-sm-8 col-10" style={{margin:'auto'}}>
						<div className="boxImage">
							<div className="logo1 logo">
								<a href="https://github.com/Andreas-Sujono" target="_blank">ReactJs</a>
							</div>
							<img className="img1" src="./static/skill1.png" alt="image 1"/>
						</div>
					</div>
					</Fade>

					<Fade top>
					<div className="col-md-4  col-sm-8 col-10" style={{margin:'auto'}}>
						<div className="boxImage">
							<div className="logo2 logo">
								<a href="https://github.com/Andreas-Sujono" target="_blank">Node Js</a>
							</div>
							<img className="img2" src="./static/skill2.png" alt="image 2"/>
						</div>
					</div>
					</Fade>

					<Fade bottom>
					<div className="col-md-4  col-sm-8 col-10" style={{margin:'auto'}}>
						<div className="boxImage">
							<div className="logo3 logo">
								<a href="https://github.com/Andreas-Sujono" target="_blank">PyTorch</a>
							</div>
							<img className="img3" src="./static/skill3.png" alt="image 3"/>
						</div>
					</div>
					</Fade>

				</div>

				

			</div>
		);

	}
}