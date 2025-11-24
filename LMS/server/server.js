
const express = require('express')
const cors = require('cors')
const {connectDB } = require('./configs/mongodb.js')
 require('dotenv').config()
const clerkWebhooks = require('./controllers/webhooks.js')
//initialize express
const app =express()

//connect to db
 connectDB()

//middlewares
app.use(cors())

//Routes 
app.get('/', (req, res)=>res.send("API working"))

app.post('/clerk', express.json(),clerkWebhooks)


//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})