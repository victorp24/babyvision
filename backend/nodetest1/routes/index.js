var express = require('express');
var router = express.Router();

//Return the collection containing the current state of the temperature and humidity (from DHT11)
//and wether the baby is crying (Raspberry pi sound sensor)
router.get('/monitorData', function(req, res, next) {
  var db = req.db;
  var collection = db.get('monitorcollection');
  collection.find({},{}, function(e,docs){return res.json(docs)});});

//Return the collection with the current state of the music, volume, and LED lights
router.get('/tempVals', function(req, res, next) {
  var db = req.db;
  var collection = db.get('datacollection');
  collection.find({},{}, function(e,docs){return res.json(docs)});});

//Return the collection containg the last sent image from the raspberry pi camera,
//and whether a face and/or motion is detected by the camera
router.get('/imageStream', function(req, res, next) {
  var db = req.db;
  var collection = db.get('imagecollection');
  collection.find({}, function(e,docs){return res.json(docs)});});

//Update the current state of the music, volume, and LED lights
router.post('/monitorData', function(req, res, next) {
  var user = req.headers["x-real-ip"]; //Get the ip address of the device sending the post rquest. This is used to filter which devices are allowed to post
//if (user == '128.189.64.100' || user == '128.189.232.50' || user == '206.87.127.190') {
  var db = req.db
  var temperature = req.body.temperature;
  var humidity = req.body.humidity;
  var crying = req.body.crying;
  var collection = db.get('monitorcollection');
  var element = collection.find();

//Update the database
  collection.update(element, {"temperature": temperature, "humidity":humidity, "crying":crying}, 
    function(err, doc) {
        if(err) {
             res.send("There was a problem adding the information to the database.");
        }
        else {res.send("Data inputted to the database")}
    });
//}
});

//Update the current state of the temperature, humidity, and sound sensors (Check if baby is crying)
router.post('/tempVals', function(req, res, next) {
  var user = req.headers["x-real-ip"]; //Get the ip address of the device sending the post rquest. This is used to filter which devices are allowed to post
 if (user == '128.189.64.100' || user == '128.189.232.50' || user == '206.87.127.190') { //Allow certain ip addresses post accesses
    var db = req.db;
    var twinkle = req.body.twinkle;
    var hush = req.body.hush;
    var rock = req.body.rock;
    var sheep = req.body.sheep;
    var row = req.body.row;
    var volume = req.body.volume;
    var green = req.body.green;
    var red = req.body.red;
    var yellow = req.body.yellow;
    var yellowgreen = req.body.yellowgreen;
    var yellowred = req.body.yellowred;
    var allcolors = req.body.allcolors;
    var lights = req.body.lights;
    var stopmusic = req.body.stopmusic;

    var collection = db.get('datacollection');
    var element = collection.find();

    //Update the database
    collection.update(element, {"twinkle": twinkle, "hush": hush, "rock": rock, "sheep": sheep, "row": row, "volume": volume, "green": green, "red": red,
"yellow": yellow, "yellowgreen": yellowgreen, "yellowred": yellowred, "allcolors": allcolors, "lights":lights, "stopmusic": stopmusic}
    , function (err, doc) {
        if (err) {
            res.send("Error!");
        }
    });
  }
});

//Get the last frame sent by the raspberry pi camera, encoded in base64 format
router.post('/imageStream', function(req, res, next) {
    var user = req.headers["x-real-ip"]; //Get the ip address of the device sending the post rquest. This is used to filter which devices are allowed to post
    var db = req.db;

    var img = req.body.image;
    var fd = req.body.faceDetected;
    var md = req.body.motionDetected;

    var collection = db.get('imagecollection');
    var element = collection.find();

    //Update the database
    collection.update(element, {"image":img, "faceDetected":fd, "motionDetected":md}
    , function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("Error!");
        }
    });
});

module.exports = router;
