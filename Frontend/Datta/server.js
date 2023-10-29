// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // Replace this connection string with your own MongoDB Atlas connection string
// const mongoURI = 'mongodb+srv://dattakale21:datta2003@cluster0.vh3gwx8.mongodb.net/signup?retryWrites=true&w=majority';

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// const User = mongoose.model('User', {
//     name: String,
//     email: String,
//     password: String
// }, 'sign'); // 'sign' specifies the collection name

// app.use(express.json());

// app.post('/signup', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const user = new User({ name, email, password });
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while saving the user.');
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dattakale21:datta2003@cluster0.vh3gwx8.mongodb.net/?retryWrites=true&w=majority";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
