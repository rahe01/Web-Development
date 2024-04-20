const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());





const uri = "mongodb+srv://raheerror16:qwuweyiwewe@cluster0.ncq0h0t.mongodb.net/mangoDB?retryWrites=true&w=majority";


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

    // Create a database called "admin"
    const usersCollection = client.db("mangoDB").collection("mango");
    app.post("/users", async (req, res) => {
        try {
            const user = req.body;
            console.log('new user', user);
            const result = await usersCollection.insertOne(user);
            res.send(result);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error saving user to database");
        }
    });




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});