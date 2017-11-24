var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27500/users', {
    useMongoClient: true
});

var schema = {
    name: String,
    email: String,
    gender: String,
    job: String,
    favorite_colors: String,
    avatar: String
}

var doc = new mongoose.Schema(schema);

var USERCLASS = mongoose.model('employees', doc);

module.exports = USERCLASS;