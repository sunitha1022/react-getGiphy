
import React, { Component } from 'react';

import axios from 'axios';

class SearchList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: '',
			searchString: '',

		}
	}


	render() {
		return (
			<div>

				<input type="text" name="name" onChange={this.handleChange} />
				<button type="submit" onClick={this.handleSubmit}>Get Gif</button>
				<h1> <img src={this.state.url}></img></h1>

			</div>

		)
	}
	handleChange = (e) => {
		//e.preventDefault();
		console.log('search string====>', e.target.value)
		console.log('URL IS ', process.env.REACT_APP_BASE_URL)

		this.setState({
			searchString: e.target.value,
		})
	}
	handleSubmit = () => {
		const apikey = 'e6NrlE9MYfATwqAQZ3cqO0tTPueWMvVr'
		let searchString = this.state.searchString
		let response = axios.get(`${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&q=${searchString}`,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				console.log('the response i got===>', response);
				console.log(response.data.data[0].images.downsized.url);
				this.setState({
					url: response.data.data[0].images.downsized.url
				})
			})
			.catch((error) => {
				console.log('API ERROR:===>', error);
			});
		console.log(response);
	}
}

export default SearchList;