const { MongoClient } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017";

let client1 = {};

try{
    client1 = new MongoClient(uri);
    console.log("Db Connected.....");
}
catch(err){
    console.log(err);
    console.log("Error while connecting to the database.")
}

module.exports = client1;