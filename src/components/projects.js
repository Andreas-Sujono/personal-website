import React,{Component} from 'react'
import Zoom from 'react-reveal/Zoom';

export default class Projects extends  Component{
	constructor(){
		super()
		this.state = {
			project1: {
				img:'http://img.everychina.com/nimg/b4/cc/8cada59fc798c0d18d1f89799c91-300x300-0/ultrasonic_module_remote_control_robot_car_for_arduino_starters.jpg',
				title:'Arduino Car Controller',
				details:'built the remote control car with bluetooth controller using Arduino microcontroller.\n \
						Hardware needed: \n1) bluetooth module HC05\n2) Arduino uno\n3) driver module L298N\n4) 12V High Torque DC Motor\n5) 3.3v Batteries '
			},
			project2: {
				img:'./static/togo.png',
				title:'Travel Mobile App',
				details:'Developed a mobile app using react native. Created all the design by my own including the splash screen, login page, homepage, and other page.\n\
				Using several API from google to find the geolocation and to find the places around'
			},
			project3: {
				img:'./static/website2.png',
				title:'News Web App',
				details:'Made a news Web Application using ReactJs for the front end and Python for the backend. Implemented grid for the news appearance\
				Created API also for the user to create , update, or delete the news'
			},
			project4: {
				img:'./static/pytorch.png',
				title:'Deep Learning Research',
				details:'Joined Deep Learning Research Team in NTU. Have survey a lot of paper and the latest method for Image blending. The purpose of this problem is to\
				to combine some part of image to other image so it can be combined perfectly. it is similar like masking in photoshop, but we use deep learning specifically convolutional Neural Network'
			},
			project5: {
				img:'./static/skintech.png',
				title:'SkinTech',
				details:'Built a web application and machine learning model to classify a skin image cancer whether it is benign or malignant. Developed Also several features like login and signup form, LiveChat using chatroll.\n\
				\n\n\n\n\n submitted as hackaton project in NTU Hackaton 2019'
			},
			windowMid:{
				appear:false,
				project:{img:'#',
				title:'title',
				details:'details'},
			},
		}
	}

	render(){
		return(
			<div className="projects" id="projects">
				<hr className="hr1"/>
				<hr className="hr2"/>
				<hr className="hr3"/>
				
				
				<div className="header"> Projects </div>

				
				<div className="projectsList row">

					<Zoom>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="card project1">
						  <img className="card-img-top" src={this.state.project1.img} alt="Project1"/>
						  <div className="card-body">
						    <h5 className="card-title">{this.state.project1.title}</h5>
						    <p className="card-text">{this.state.project1.details.substring(0,100)}...</p>
						    <div className="btn btn-primary" onClick={
						    	() => this.setState({windowMid:{appear:true,project:this.state.project1}})
						    }>More...</div>
						  </div>
						</div>
					</div>
					</Zoom>

					<Zoom>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="card project2">
						  <img className="card-img-top" src={this.state.project2.img} alt="Project2"/>
						  <div className="card-body">
						    <h5 className="card-title">{this.state.project2.title}</h5>
						    <p className="card-text">{this.state.project2.details.substring(0,100)}...</p>
						    <div className="btn btn-primary" onClick={
						    	() => this.setState({windowMid:{appear:true,project:this.state.project2}})
						    }>More...</div>
						  </div>
						</div>
					</div>
					</Zoom>

					<Zoom>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="card project3">
						  <img className="card-img-top" src={this.state.project3.img} alt="Project3"/>
						  <div className="card-body">
						    <h5 className="card-title">{this.state.project3.title}</h5>
						    <p className="card-text">{this.state.project3.details.substring(0,100)}...</p>
						    <div className="btn btn-primary" onClick={
						    	() => this.setState({windowMid:{appear:true,project:this.state.project3}})
						    }>More...</div>
						  </div>
						</div>
					</div>
					</Zoom>

					<Zoom>
					<div className="col-lg-7 col-md-6 col-12">
						<div className="card project4">
						  <img className="card-img-top" src={this.state.project4.img} alt="Project4"/>
						  <div className="card-body">
						    <h5 className="card-title">{this.state.project4.title}</h5>
						    <p className="card-text">{this.state.project4.details.substring(0,100)}...</p>
						    <div className="btn btn-primary" onClick={
						    	() => this.setState({windowMid:{appear:true,project:this.state.project4}})
						    }>More...</div>
						  </div>
						</div>
					</div>
					</Zoom>

					<Zoom>
					<div className="col-lg-3 col-md-12 col-12">
						<div className="card project5">
						  <img className="card-img-top" src={this.state.project5.img} alt="Project5"/>
						  <div className="card-body">
						    <h5 className="card-title">{this.state.project5.title}</h5>
						    <p className="card-text">{this.state.project5.details.substring(0,100)}...</p>
						    <div className="btn btn-primary" onClick={
						    	() => this.setState({windowMid:{appear:true,project:this.state.project5}})
						    }>More...</div>
						  </div>
						</div>
					</div>
					</Zoom>

				</div>

				{this.state.windowMid.appear ? 
				<div className="windowAppearBack">
					<div className="windowAppear">
							<div className="closeButton" onClick={ () => this.setState({windowMid:{appear:false}})}> &times; </div>

							<div className="windowContent">
								<img src={this.state.windowMid.project.img}/>
								<div className="content">
									<h2> {this.state.windowMid.project.title} </h2>
									<p> 
										{this.state.windowMid.project.details.split('\n').map( x =>(
											<div> {x} </div>
										) )}
									</p>
								</div>
							</div>
					</div> 
				</div>:null
				}

			</div>
		);
	}
}




