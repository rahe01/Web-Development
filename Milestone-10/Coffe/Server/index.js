const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ncq0h0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

  
    app.post('/coffee', async (req, res) => {
        const coffee = req.body;
        const result = await client.db("coffeeDB").collection("coffee").insertOne(coffee);
        res.send(result)
        console.log(result)
    })

    app.get('/coffee', async (req, res) => {
        const result = await client.db("coffeeDB").collection("coffee").find({}).toArray();
        res.send(result)
        console.log(result)
    })
   app.delete('/coffee/:id', async (req, res) => {
    const id = req.params.id;
    const result = await client.db("coffeeDB").collection("coffee").deleteOne({_id: id});
    res.send(result)
    console.log(result)

   })
   app.get("/coffee/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const result = await client
      .db("coffeeDB")
      .collection("coffee")
      .findOne(query);
    res.send(result);
   })

  //  user api

   app.post('/user', async (req, res) => {
    const user = req.body;
    const result = await client.db("coffeeDB").collection("users").insertOne(user);
    res.send(result)
    console.log(result)
   })

   app.get('/user', async (req, res) => {
    const result = await client.db("coffeeDB").collection("users").find({}).toArray();
    res.send(result)
    console.log(result)
   })
   app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await userCollection.deleteOne(query);
    res.send(result);
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Coffee server is running')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

