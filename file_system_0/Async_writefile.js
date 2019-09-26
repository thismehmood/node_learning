//Asynchronous file writing
var fs = require("fs");
var data = "Asynchronous file writen operation execute successfully";
fs.writeFile("Async.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});