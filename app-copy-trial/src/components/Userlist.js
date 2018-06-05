import React, { Component } from 'react';
import Nav from './Nav';
import "./Userlist.css"

class Userlist extends Component {
	render() {
		return( 
			<div class="container" id="userlist">
				<div className="grid-container">
				  <div className="grid-item-1">Name</div>
				  <div className="grid-item-1">Email</div>
				  <div className="grid-item-1">Survey Date</div>  
				  <div className="grid-item">Jeffrey Crawford</div>
				  <div className="grid-item">jlong@thoughtsphere.gov</div>
				  <div className="grid-item">September 14, 2015</div>  
				  <div className="grid-item">Denise Wong</div>
				  <div className="grid-item">krose@tagfeed.net</div>
				  <div className="grid-item">September 14, 2015</div>  
				  <div className="grid-item">George Williams</div>
				  <div className="grid-item">smartinez@zooveo.edu</div>
				  <div className="grid-item">September 14, 2015</div>  
				  <div className="grid-item">Margaret Chapman</div>
				  <div className="grid-item">lbanks@ntag.biz</div>
				  <div className="grid-item">September 14, 2015</div>  
		   
				</div>

				<div className="container" id="pagination">
					<div class="pagination">
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