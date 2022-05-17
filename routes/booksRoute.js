const express = require('express');
const router = express.Router();
const Books = require('../model/booksSchema');

router.get('/books', async (req, res) => {
    try{
        const books = await Books.find();
        res.send(books);
    }
    catch(err){
        res.status(404).send("Not found!");
    }
})

router.post('/books', async (req, res) => {
    //console.log(req.body);
    const bookData = new Books(req.body);
    try{
        const postBook = await bookData.save();
        res.send(postBook);
    }
    catch(err){
        res.send(err);
    }
})

router.get('/books/:bookId', async (req, res) => {
    try{
        const singleBook = await Books.findById(req.params.bookId);
        res.send(singleBook);
    }
    catch(err){
        res.send(err);
    }
})



module.exports = router;