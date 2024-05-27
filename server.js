const express = require('express')

const app = express()

const port = 5000
// importation lel connectdb 
const connectdb = require('./config/connectdb')
// appel lel connectdb
connectdb()
// importation lel bookRoute
 const bookRoute = require('./routes/bookRoutes')
 //pour l'affichage 
 
 app.use(express.json())

 // path lel book
 
 app.use('/book',bookRoute)







app.listen(port,(err)=>{
    err?console.log(err):console.log('Server is running on port =>'+port)
})