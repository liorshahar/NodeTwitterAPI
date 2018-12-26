require('./mongoose');
require('dotenv').load();
var tvShowJson      = require('./stopList.json');
var Twitter         = require('twitter');
var mongoose        = require('mongoose');
var mongooseModels = require('./mongooseDB/Models/TVshowsModels')
var ObjectId        = mongoose.Types.ObjectId;

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});





var tweetTest = {
    _id: new ObjectId,
    text: 'מבחינתי העניין חפור',
    createdAt: 'this is date'
}



mongooseModels.TVShowsModel.find({ tvshowname: 'החפרנים'}, function (err, tvShows) {
    //console.log(tvShows[0].sentences[0].text)
    let tvShowsArraySentences = tvShows[0].sentences;
  
    tvShowsArraySentences.forEach((sentences)=>{
    //console.log(sentences.text);
    var params = {
        "query": '"בר רפאלי" lang:he',
        "maxResults": "10"
      
    }

    client.get('tweets/search/30day/my30Days.json', params, function(error, tweets, response) {
        console.log(tweets.results.length);
        if(tweets.results){
            tweets.results.forEach(function(tweet) {
                console.log(tweet.text)
                var newTweet = mongooseModels.TweetsModel({
                    _id: new ObjectId,
                    text: tweet.text,
                    createdAt: tweet.created_at
                })
                sentences.tweets.push(newTweet)
                    
            })   
            
         }
    })
    
   
    if(err){
        console.log(err)
        }
        
    });
  
  
});



