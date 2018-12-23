//Require Mongoose
var mongoose = require('mongoose');

// Require schema
var TVShowsSchema = require('../Schems/TVShowsSchema');

// Compile model from schema
var TVShowsModel = mongoose.model('SomeModel', TVShowsSchema );

module.exports = TVShowsModel;