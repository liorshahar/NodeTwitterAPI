require('dotenv').load();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});


var params = {
    "query": '"מי מתעסק" lang:he',
    "fromDate": "201212230000",
    "toDate": "201812230000",
}


/* client.get('tweets/search/fullarchive/CollectTvShow.json', params, function(error, tweets, response) {
  
    tweets.results.forEach(function(tweet) {
   	console.log("tweet: " + tweet.text)
   });
}); */