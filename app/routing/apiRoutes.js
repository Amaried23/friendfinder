// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information from the friends survey 
// ===============================================================================

var friendsData = require("../data/friends.js");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

    app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're u9sing the body-parser middleware
    console.log(req.body)
    friendsData.push(req.body);
    res.json(true);

    // add up new friend scores
    // compare new friend total score with friends total score in friends array
    // send matchedFriend object back as a response
  });
};