import axios from 'axios'
const cors = require('cors');
//index ,show,create,update,destory are routes
//get all articles
const getGiphy = () => {
	return axios({
		method: 'GET',
		headers: { "Access-Control-Allow-Origin": "*" },
		//headers: { 'Access-Control-Allow-Credentials': true },
		//headers: { 'api_key': 'e6NrlE9MYfATwqAQZ3cqO0tTPueWMvVr' }, // replace apicode with actual api key
		url: `http://dog.ceo/api/breeds/image/random`
	});
}

export { getGiphy }


//axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell', { headers: config })