var middleware = {
	requireAuthentification: function(req, res, next){
		console.log('private route hit!');
		next();

	},
	logger: function(req, res, next){
		var date = Date().toString();
		console.log('Request: '+ date + '  ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;