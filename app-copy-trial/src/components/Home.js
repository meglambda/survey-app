import React, { Component } from 'react';
import Nav from './Nav';
import Userlist from './Userlist';
import "./Home.css";
import axios from 'axios';

class Home extends Component {
	 // default State object
  // state = {
  //   contacts: []
  // };

  // componentDidMount() {
  //  axios
  // .get("https://jsonplaceholder.typicode.com/users")
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });

	render() {
		return( 
			<div>
			
			<Nav />

			

			<Userlist />
			<div>
				<ul>
					
				</ul>
			</div>
			
			</div>

		)

	}

}

export default Home;