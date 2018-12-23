require('dotenv').load();

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const db_pass = process.env.DB_PASS;
var TVShowsModel = require('./mongooseDB/Models/TVshowsModel')

//Set up default mongoose connection
var mongoDB = `mongodb://db_user:${db_pass}@ds141654.mlab.com:41654/twitter-api-tv-shows`;
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var TVshowIten = {
    tvshowid: new ObjectId,
    tvshowname: 'Test TV Show',
    sentences:[]
}

var sentenceItem = {
    tvshowid: TVshowIten.tvshowid,
    sentenceid: new ObjectId, 
    text: 'this is text', 
}

/* var data = new TVShowsModel(TVshowIten);
data.sentences.push(sentenceItem);
data.save(); */




