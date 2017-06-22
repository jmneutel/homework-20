 // Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/model");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get("/api/saved", function(req, res){
   
  Article.find({})
    .exec(function(err,doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    })
});

app.post("/api/saved", function(req, res){
  var newArticle = new Article(req.body);
  console.log(req.body);

  newArticle.save(function(err, doc) {
  	if (err) {
  		console.log(err);
  	} else {
  		res.send(doc);
  	}
  })
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/nyt-example.html");
});

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl");
mongoose.connect("mongodb://jaredneutel:password12345@ds131742.mlab.com:31742/heroku_hd08cl4j");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
