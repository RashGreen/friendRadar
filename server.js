<<<<<<< HEAD
const friendyFriend = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
]
=======
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "hine.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
// //4. Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

>>>>>>> 60f1cc57e67d0c8a407aa19d0d2fdbb9ff2df75a
