var axios = require('axios');

var apiKey = '7b581e78c3304603b1a3de26e29016bb';

var helpers = {

	runQuery: function(term, start, end) {
		var trimmedTerm = term.trim();
		var trimmedStart = start.trim() + "0101";
		var trimmedEnd = end.trim() + "1231";
 

	return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {

		params: {
			"api-key": apiKey,
			"q": trimmedTerm,
			"start": trimmedStart,
			"end": trimmedEnd
		}

	}).then(function(results) {
		console.log("results", results.data.response);
		return results.data.response;
	})


	},

	getSaved: function(){
		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results ", results);
				return restuls;
			})
	},
	postSaved: function(title, date, url){
		var newArticle = {
			title: title,
			date: date,
			url: url
		};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				console.log("acios results ", results._id);
				return results._id;
			})
	},
	deleteSaved: function(title, data, url){
		return axios.delete('/api/saved', {
			params: {
				'title': title,
				'data': data,
				'url': url,
			}
		})
		.then(function(results){
			console.log("axios results ", results);
			return results;
		})
	}
}

module.exports = helpers;