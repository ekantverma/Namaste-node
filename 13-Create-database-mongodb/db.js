const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

const dbName = "NamasteNodejs";

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection("User");

    // Read from the db
    return 'done';
  } catch(err){
    console.log("Error connecting to MongoDB");
  }
}

main()
.then(console.log).catch(console.error).finally(() => client)