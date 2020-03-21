var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/curse';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;

db.once('open', function() {
  // we're connected!
  console.log(`We're connected!`);
});
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




const timeRangeSchema = new mongoose.Schema({
  hour: {
    type: Number,
    max: 18,
    min: 8
  },
  minute: {
    type: Number,
    max: 59,
    min: 0
  },
  time: {
    type:Number,
    get(){
      return this.get('hour')* 100 + this.get('minute')
    }
  }
})

const courseSchema = new mongoose.Schema({
  name: String,
  startTime: timeRangeSchema,
  endTime: timeRangeSchema,
  weekday: {
    type: Number,
    max: 6,
    min: 0
  }
})

const Course = mongoose.model('Course', courseSchema)