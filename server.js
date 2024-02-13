const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute=require('./routes/userRoute')
const connectdb = require("./config/connect");
dotenv.config({ path: "./config/.env" });
app.use(express.json());
const port = process.env.PORT || 5000;

connectdb();
app.use('/api/user', userRoute)
app.use('/api1/user', userRoute)


app.listen(port, (err) => {
  err ? console.log(err) : console.log("server run in ", port);
});

