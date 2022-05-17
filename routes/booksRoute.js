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

router.delete('/books', async (req, res) => {
    try{
        await Books.remove();
        res.send("All books are removed from Database!");
    }
    catch(err){
        res.send(err);
    }
})

// router.put('/books', async (req, res) => {
//     res.send("You can not put in this endpoint!");
// })

router.get('/books/:bookId', async (req, res) => {
    try{
        const singleBook = await Books.findById(req.params.bookId);
        res.send(singleBook);
    }
    catch(err){
        res.send(err);
    }
})

router.delete('/books/:bookId', async (req, res)=>{
    try{
        const deleteBook = await Books.findByIdAndDelete(req.params.bookId);
        res.send("Book deleted..!");
    }
    catch(err){
        res.send(err);
    }
})



module.exports = router;