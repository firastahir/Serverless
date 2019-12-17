var AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});
AWS.config.update({profile: "FT"});
var documentClient = new AWS.DynamoDB.DocumentClient();

var fs = require("fs");

//var sleep = require("sleep");

var musicData = fs.readFileSync("musicData.json");
var jsonContent = JSON.parse(musicData);

for (entry in jsonContent) {
    console.log("THIS IS THE ENTRY")
    console.log(jsonContent[entry])

    var params = {
        TableName : "GameScores",
        Item: jsonContent[entry]
    };

    documentClient.put(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
    });
  //    sleep.msleep(300)
}
