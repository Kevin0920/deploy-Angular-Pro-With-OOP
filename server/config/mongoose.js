var mongoose = require('mongoose');
var path = require('path');

var fs = require('fs');

// mongoose.connect('mongodb://localhost/book-event');

var models_path = path.join(__dirname, './../models');

var uristring =
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb:mongodb://kevin:123456@ds135514.mlab.com:35514/duxwell'
mongoose.connect(uristring);


fs.readdirSync(models_path).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		// require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);
	}
})
