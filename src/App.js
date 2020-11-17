
import React, { Component } from 'react';
import SearchList from './SearchList';



class App extends Component {


	constructor(props) {
		super(props)
		this.state = {
			searchString: '',

		}
	}



	render() {
		console.log(process.env)
		return (
			<>
				<h1>Giphy</h1>
				<SearchList ></SearchList>


			</>
		);
	}

}
export default App;

