
const express = require('express')
const cors = require('cors')
const {connectDB} = require('./configs/mongodb.js')
 require('dotenv').config()
const {clerkWebhooks} = require('./controllers/webhooks.js')
//initialize express
const app =express()

//connect to db
 connectDB()

//middlewares
app.use(cors())
app.use(express.json())
//Routes 
app.get('/', (req, res)=>res.send("API working"))




//for test
app.get('/test-db', async (req, res) => {
    try {
        const User = require('./models/User.js')
        const testUser = await User.create({
            _id: 'test-user-' + Date.now(),
            email: 'test@example.com',
            name: 'Test User',
            imageUrl: 'https://example.com/image.jpg'
        })
        
        res.json({ 
            success: true, 
            message: 'Database and user created successfully!', 
            user: testUser 
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Database error teftraul: ' + error.message 
        })
    }
})










app.post('/clerk',clerkWebhooks)


//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})