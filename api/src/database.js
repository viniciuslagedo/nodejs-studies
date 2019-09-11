const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs_api', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;