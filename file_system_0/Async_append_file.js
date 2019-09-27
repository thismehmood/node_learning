var fs = require("fs");
var data = "Asynchronous append_file operation execute successfully";
fs.writeFile("Async_append_file.txt", data, (err) => {
  if (err) console.log("error while writing async_append_file" +err);
  console.log("Successfully Written Async_append to File.");
});