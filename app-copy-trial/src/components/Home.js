import React, { Component } from 'react';
import Nav from './Nav';
import Userlist from './Userlist';
import "./Home.css";
import axios from 'axios';

class Home extends Component {
	state = {
		users: []
	}; 
	async componentDidMount() {
   const response = await axios.get('http://localhost:8080/api/users'); // maybe try with the full url if this doesnt work

   this.setState({users: response.data.data});	
}

	render()

	 {
	 	// console.log(this.state)
		return( 
			<div>
			
			<Nav />

			

			<Userlist users={this.state.users} />
			<div>
				<ul>
					
				</ul>
			</div>
			
			</div>

		)

	}

}

export default Home;