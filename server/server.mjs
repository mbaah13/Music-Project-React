import "./loadEnvironment.mjs";
import db from "./db/conn.mjs";
import express from "express";
import CorsRequest from "cors";

const app = express();
const cors = CorsRequest;

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/maggie', (req, res) => {      
    res.json({ message: "Hello from maggie!" });
});

app.get('/mongodb', async (req, res) => { 
    let collection = await db.collection("ui-data");
    let results = await collection.find({})
     .limit(50)
     .toArray();
   
    res.send(results).status(200);     
    // res.json({ message: "Hello from maggie!" });
});

app.post('/newPost', (req, res) => {      
    res.json({ message: "Hello from maggie!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});


