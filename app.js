import express from "express";
import mongoose from "mongoose";
import contactRouter from "./router/contact.router.js"

const url = 'mongodb://mongohost/contactdb';

const app = express();
app.use(express.json())

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open', () => console.log('mongodb connected...'))

app.get('/test', async(req,res) => {
    res.send("connected")
})
app.use('/contact', contactRouter);

app.listen(8000, () => console.log('server started'));