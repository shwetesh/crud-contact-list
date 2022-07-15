import express from "express";
import mongoose from "mongoose";
import contactRouter from "./router/contact.router.js"
import userRouter from "./router/user.router.js"
import middleware from "./utils/middleware.js";

const app = express();
app.use(express.json())

mongoose.connect('mongodb://mongohost/contactdb', {useNewUrlParser: true});
mongoose.connection.on('open', () => console.log('mongodb connected...'))

app.get('/test', async(req,res) => res.send("working"))
app.use('/',express.static('public')); // for html css javascript
app.use(middleware.logging);
app.use('/user', userRouter);
app.use('/contact', middleware.verification, contactRouter);

app.listen(8000, () => console.log('server started'));