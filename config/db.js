const mongoose = require('mongoose');

//TODO: extract to separate file
const uri = 'mongodb://localhost:27017/catagram';

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database!');
});