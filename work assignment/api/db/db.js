const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const mongoURI = 'mongodb://localhost:27017/week11';
mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
let mong = mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
