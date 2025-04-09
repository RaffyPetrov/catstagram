const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/mongotest";
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
    console.log("Connected to MongoDB");

    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        email: String
    });

    const Person = mongoose.model('Person', personSchema);

    let person = new Person({
        name: 'Tamás Radkó',
        age: 32,
        email: 'Tamás523@example.com'
    });

    try {
        const result = await person.save();
        console.log(result);
    } catch (err) {
        console.error(err);
    }
});


