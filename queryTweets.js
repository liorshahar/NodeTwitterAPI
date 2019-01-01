
require('dotenv').load();

const Twitter = require('twitter');

const client  = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

/* Querying the twitter API  tweets json results and return the tweet Object array as:
    [
        {
            "text": "text",
            "created_at": "date"
        },
        ...
    ]
*/
function getTweets(query){
    var params = {
        "query": `"${query}" lang:he`,
        "maxResults": "10"
    }

    console.log('Enter getTweets(), query: ' + query);
    const tweetArray = [];
    return new Promise((resulve, reject)=>{
        client.get('tweets/search/30day/my30Days.json', params, function(error, tweets, response) {
            console.log('Query results length: ' + tweets.results.length);
            if(tweets.results){
                tweets.results.forEach(function(tweet) {
                    //console.log(tweet.text)
                    tweetArray.push({
                        text: tweet.text,
                        created_at: tweet.created_at
                    })
                    console.log("tweetArray.length: " + tweetArray.length)           
                }) 
                console.log("tweetArray.length: --------------------" + tweetArray.length)          
                if(tweetArray.length > 0){
                    console.log("tweetArray:" + tweetArray);
                    resulve(tweetArray);
                }
                else{
                    reject('Empty Results');
                }
            }
        })
    }).catch(err=>{console.log(err)})
}


/* Get sentences array to search for each of them if there is tweets and return sentences Object array as: 
    "sentences": [
            {
                "sentence" : "text",
                "tweets": []
            },
            ... ]
*/
async function getSentence(sentencesArray){
    const sentencesArrayObject = [];
    console.log('Enter getSentence()')
    for (const item of sentencesArray) {
            const asyncResult = await getTweets(item.text);
            console.log("asyncResult: " + asyncResult[0].text)
            sentencesArrayObject.push(asyncResult)
    }
    console.log('After getSentence() main loop: ' + sentencesArrayObject[0]);
    return sentencesArrayObject
}


getSentence([{"text": "ביבי"}])