//Require Mongoose
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//Define a schema
var Schema = mongoose.Schema;

// Create sentences child schema
var sentencesSchema = new Schema({ tvshowid: ObjectId, sentenceid: ObjectId, text: String, tweets:[ObjectId] });


// Create TV show schema
var TVShowsSchema = new Schema({
  tvshowid: ObjectId,
  tvshowname: String,
  sentences:[sentencesSchema],
  child: sentencesSchema
},{collection: 'TVShowsCollection'});

module.exports = TVShowsSchema;