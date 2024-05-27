const express = require('express')

const bookSchema = require ('../model/book')

const bookRoute = express.Router()

// get 
// localhost:5000/book/getall

bookRoute.get('/getall', async (req,res)=>{
    try{
        const book = await bookSchema.find()
        res.status(200).json({msg: 'you get all books', book})
    }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
})



// post 
// localhost:5000/book/addbook

 bookRoute.post('/addbook', async (req,res)=>{
    try{
        const newBook = new bookSchema(req.body)
        await newBook.save()
        res.status(200).json({msg: 'you add book', newBook})
    }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
 })



// put
// localhost:5000/book/update/:id
bookRoute.put('/update/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const updatebook = await bookSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        
        res.status(200).json({msg: 'you update book',updatebook})
    }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
 })





// delete 
// localhost:5000/book/delete/:id
bookRoute.delete('/delete/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const deleteebook = await bookSchema.findByIdAndDelete(id)
        
        res.status(200).json({msg: 'you delete book'})
    }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
 })





module.exports = bookRoute