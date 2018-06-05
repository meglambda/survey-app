import React, { Component } from 'react';
import Nav from './Nav';
import "./Header.css";

class Home extends Component {
	render() {
		return( 
			<div>
					<div id="banner-2" class="container">
							<div>
							 <img id="logo" src="../assets/img/logo.gif" alt="" width="250px" height="250px" />
							 <span>
							 		<h1>Dynamo</h1>
									
									<h2>Leading General Style</h2>
									<p>Styles are six broad areas of behavioral tendancies that give the "big picture" of a person's behavior</p>

									<h3>General Style</h3>
									<h3>Ideal Scores</h3></span>
							</div>
							 <div class="container" id="dynamic-title">
									
							  </div>
					</div>
						
			</div>

		)

	}

}

export default Home;