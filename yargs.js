const yargs = require('yargs')
 
// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
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