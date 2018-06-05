import React, { Component } from 'react';
import Nav from './Nav';
import "./Userlist.css"

class Userlist extends Component {
	renderUsers() {
		return this.props.users.map((user, i) => {
			return (
				<div className="user-wrapper" key={i}>
				<div className="sub-wrapper">
					<div className="first-item">{user.full_name}</div>
					<div>{user.email}</div>
				</div>
				<div className="sub-wrapper">
					<div className="first-item">{user.survey_date}</div>
					
					
				</div>
			</div>
				);	
			})
	}

	render() {
	 
		return( 


			<div className="container" id="userlist">
				{this.renderUsers()}

				<div className="container" id="pagination">
					<div className="pagination">
					  <a href="#">PREV</a>
					  <a href="#">1</a>
					  <a href="#">2</a>
					  <a href="#">3</a>
					  <a href="#">4</a>
					  <a href="#">NEXT</a>
					</div>
				</div>

			</div>

		)

	}

}

export default Userlist;