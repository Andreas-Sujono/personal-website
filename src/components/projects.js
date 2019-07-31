import React,{Component} from 'react'
import Zoom from 'react-reveal/Zoom';

export default class Projects extends  Component{
	constructor(){
		super()
		this.state = {
			project1: {
				img:'http://img.everychina.com/nimg/b4/cc/8cada59fc798c0d18d1f89799c91-300x300-0/ultrasonic_module_remote_control_robot_car_for_arduino_starters.jpg',
				title:'Arduino Car Controller',
				details:'I built the remote control car with bluetooth controller using Arduino microcontroller.\n \
						Hardware needed: \n bluetooth module HC05, Arduino uno, driver module L298N, 12V High Torque DC Motor, 3.3v Batteries '
			},
			project2: {
				img:'https://images.idgesg.net/images/article/2018/08/iot_internet_of_things_wireless_network_devices_mapping_connections_by_plarguedoctor_gettyimages-946094534_1200x800-100768194-large.3x2.jpg',
				title:'Website Templates',
				details:'I\'ve made several website templates'
			},
			project3: {
				img:'http://imuscomputercollege.net.ph/wp-content/uploads/2014/09/programming.jpg',
				title:'Title',
				details:'Some quick example text to build on the card title and make up the bulk of the card\'s content'
			},
			project4: {
				img:'https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4-637x350.png',
				title:'Title',
				details:'Some quick example text to build on the card title and make up the bulk of the card\'s content'
			},
			project5: {
				img:'https://www.extremetech.com/wp-content/uploads/2015/10/Servers1-640x354.jpg',
				title:'Title',
				details:'Some quick example text to build on the card title and make up the bulk of the card\'s content'
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
										{this.state.windowMid.project.details}
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




