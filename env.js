const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://akshat:L6tAm97iHufl9nhn@cluster0.z84hq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("dthot").collection("events");
  // perform actions on the collection object
  console.log('ok')
  client.close();
});