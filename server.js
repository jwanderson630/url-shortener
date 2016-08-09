var express = require('express');

var app = express();
var getIP = require('ipware')().get_ip;
var useragent= require("useragent");
app.get('/', function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']).os.toString();
    var ipInfo = getIP(req).clientIp;
    var language = req.headers["accept-language"].split(",")[0];
    var returnData = {"ipaddress" : ipInfo, "language" : language, "software" : agent};
    res.send(returnData);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080');
});