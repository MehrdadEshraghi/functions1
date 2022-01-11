const _ = require("lodash");
exports.handler = async function(event, context) {
	var response = {
	"statusCode": 200,
	"headers": {
		"Content-Type": "application/json"
	},
	"isBase64Encoded": false,
	"multiValueHeaders": { 
		"X-Custom-Header": ["My value", "My other value"],
	},
	"body": 'awesome ' + _.VERSION
}
return response
}
