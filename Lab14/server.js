var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'X6LpIW1K35hiWOj6LZjoR0jJk',
  consumer_secret: 'D6GdOZi5zw5ee4oRAG7DT4JUJ6Th7uTDJgAKF0Mzk25U78IzbO',
  access_token_key: '17241366-3ZgC8tccQOLSA7bAA54l6Z3iHFJfdAbu948tK60Pp',
  access_token_secret: 'I63i91Wer4xXnt3GHKqllvyVU8NSQDGGDV6KqoTauRo94'
});

app.use(express.static('public'))

app.get('/', function(req, res){
  
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(!error) {
      //res.send(JSON.stringify(tweets));
      var output = "";
      for (var t = 0; t < tweets.length; t++) {
        output += "<div>";
        output += "<h2>"+ tweets[t].user.screen_name + "</h2>";
        output += "<p>" + tweets[t].text + "</p>";
        output += "</div>";
      }
      res.send(output);
    }
    else {
      res.send("Hello world! by express");
    }
  });
});

app.listen(8080);
