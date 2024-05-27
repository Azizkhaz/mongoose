const mongoose = require('mongoose')

const connectdb = async ()=>{
    await mongoose.connect('mongodb+srv://khalfaouia362:1Bf4RKsr6StGc2or@cluster0.emtgpjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    try{
        console.log('you are connected to your database')
    }catch{
        console.log(err)
    }
}

module.exports = connectdb