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



router.get('/books/:bookname', async (req, res) => {
    //console.log(req.params);
    try{
        const singleBook = await Books.findOne({name: req.params.bookname});
        res.send(singleBook);
    }
    catch(err){
        res.send(err);
    }
})

router.delete('/books/:bookname', async (req, res)=>{
    try{
        const deleteBook = await Books.findOneAndDelete({name: req.params.bookname});
        res.send("Book deleted..!");
    }
    catch(err){
        res.send(err);
    }
})


router.put('/books/:bookname', async (req, res)=>{
    try{
        const book = await Books.findOne({name: req.params.bookname});
        book.name = req.body.name;
        book.quantity = req.body.quantity;
        book.author = req.body.author;
        book.price = req.body.price;

        const updateBook = await book.save();
        res.send(updateBook);
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

router.delete('/books/:bookId', async (req, res)=>{
    try{
        const deleteBook = await Books.findByIdAndDelete(req.params.bookId);
        res.send("Book deleted..!");
    }
    catch(err){
        res.send(err);
    }
})

router.put('/books/:bookId', async(req, res) => {
    try{
        const book = await Books.findById(req.params.bookId);
        book.name = req.body.name;
        book.quantity = req.body.quantity;
        book.author = req.body.author;
        book.price = req.body.price;

        const updateBook = await book.save();
        res.send(updateBook);
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