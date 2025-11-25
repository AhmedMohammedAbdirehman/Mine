
const express = require('express')
const cors = require('cors')
const {connectDB} = require('./configs/mongodb.js')
 require('dotenv').config()
const {clerkWebhooks} = require('./controllers/webhooks.js')
const User = require('./models/User.js') // Require User at the top
//initialize express
const app = express()

//connect to db
 connectDB()

//middlewares
app.use(cors())
app.use(express.json())
//Routes 
app.get('/', (req, res)=>res.send("API working"))














app.post('/clerk',clerkWebhooks)

app.post('/test-webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    res.json({ received: true });
});

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})