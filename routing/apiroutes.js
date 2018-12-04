// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFreind = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFreind
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFreind.routeName = newFreind.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFreind);
  
    friends.push(newFreind);
  
    res.json(newFreind);
  });
  