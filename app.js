var https = require("https");
var http = require("http");
var username = "chalkers";

function outputMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " badge(s) and " + points + " point(s) in Javascript.";
  console.log(message);
}
outputMessage("Gabe",123,12);


var request =  https.get("https://www.teamtreehouse.com/" + username + ".json", function(response) {
  console.dir(response.statusCode);
});
