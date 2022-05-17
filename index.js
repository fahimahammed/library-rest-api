const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;

connect.on("open", () => {
    console.log("DB connected... ");
})


const booksRouter = require("./routes/booksRoute");
app.use('/library', booksRouter);

app.listen(port, () => {
    console.log('listening on port 3000');
})