import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookroute from './route/bookroute.js'
import cors from "cors"
import userroute from './route/userroute.js'

const password = 'Adarsh1007#';
const encodedPassword = encodeURIComponent(password);

const app = express();
const URI = `mongodb+srv://adarshsingh2003v:${encodedPassword}@cluster0.yakyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
dotenv.config();

const PORT = process.env.PORT || 8001;

//middlewares
app.use(cors());
app.use(express.json());

// connecting moongoose
mongoose.connect(URI)
    .then(() => console.log("MongoDb Connected"))
    .catch((err) => console.log("Mongo Error", err));
// defining routes

app.use("/book", bookroute);
app.use("/users", userroute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})