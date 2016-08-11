var express = require('express');
var app = express();
var googl = require('goo.gl');
googl.setKey('AIzaSyAmO8l8hUZqY192Wu-o-ghaoVpshcl8n8c');
googl.getKey();
app.get(/^\/(.+)/, function(req, res) {
  var originalUrl = req.originalUrl.slice(1,-1);
  var finalResponse = {"originalURL" : null, "shortenedURL" : null};
    googl.shorten(originalUrl)
    .then(function(result){
      console.log(originalUrl);
      console.log(result);
      finalResponse.originalURL = originalUrl;
      finalResponse.shortenedURL = result;
      res.send(finalResponse);
    }).catch(function(err){
      console.log(err.message);
      finalResponse = {"error":err.message};
      res.send(finalResponse);
    });
});
app.listen(8080, function () {
  console.log('Url Shortening app listening on port 8080');
});