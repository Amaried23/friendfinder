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
     

     // this is pushing what was entered into the survey onto the friends.js page in API format


    console.log(req.body)
    friendsData.push(req.body);
    res.json(true);

    // console.log is showing all the correct information but it is not pushing it onto the page 

  });
};