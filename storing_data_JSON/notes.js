//const book = require('./parseJSON.js')
const fs =require('fs');
const addnote = function(title , body){
      const notes = loadnotes()
     console.log(notes);
      notes.push({
          title: title,
         auther:body
      })
      saveparse(notes)
    }
      //console.log(parse);
    //console.log(addparse);

    const saveparse = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('write.JSON',dataJson)
    }
// loadparse read file data and parse in  
var loadnotes = function(){
    try{
        const buffer = fs.readFileSync('write.JSON');
        const databuffer = buffer.toString();
         return JSON.parse(databuffer);
        
      }
    catch(err){
        console.log("something happens wrong");
      }
}
module.exports = {addnote: addnote};