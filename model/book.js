const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    prix:{
        type:Number,
        required:true,
        
    }


})

module.exports = mongoose.model('book Schema', bookSchema)