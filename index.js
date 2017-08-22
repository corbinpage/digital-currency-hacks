var request = require('node_modules/request');

function queryPrices() {
	request({
	  url: 'https://cryptocurrencyfinder.azurewebsites.net/api/find?code=0/Kaj2jmMk1DWQ6p6x4/UPucyXxrRPMoMfpCGzuXwZ1fK4gy6M2AJw==',
	  method: 'GET',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
	    key: '5e01e16f7134519e70e02c80ef61b692',
	    user_id: '4d7a45774e6a41320a'
	  })
	}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log('BODY: ', body);
	    var jsonResponse = JSON.parse(body); // turn response into JSON

	    return jsonResponse;
	    // do stuff with the response and pass it to the callback...

	    callback(sessionAttributes, 
	        buildSpeechletResponse(intent.name, speechOutput, repromptText,
	        shouldEndSession));
	  } else {
	  	return {};
	  }
	});
}

exports.handler = function(event, context) {
  queryPrices();
};