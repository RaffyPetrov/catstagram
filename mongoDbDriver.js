const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

//#1. First Way to Connect to MongoDB
// client.connect(err => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     let db = client.db('catagram');
//     let catsCollection = db.collection('cats');

//     catsCollection.findOne({}, (err, result) => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         result.toArray((err, result) => {
//             console.log(result);
//         })
//     });
// });


//#2. Second Way to Connect to MongoDB
// client.connect()
//      .then(res => {
//         const db = client.db('catagram');
//         const catsCollection = db.collection('cats');

//         return catsCollection.findOne({})
//      })
//      .then(result => {
//         console.log(result);
//      })


//#3. Third Way to Connect to MongoDB
async function run() {
    await client.connect();

    const db = client.db('catagram');
    const catsCollection = db.collection('cats');

    let firstCat = await catsCollection.findOne({});

    console.log(firstCat);
}

run();