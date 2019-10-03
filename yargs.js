const yargs = require('yargs')
 
// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
yargs.version('1.1.0');
yargs.command({
  command:'add',
  describe:'add new thing into yargs',
  builder:{
    title:{
        describe:'notes here',
        
    }
  },
  handler: function(argv){
    console.log('adding nothing happens',argv)
  }
})