const mongoose = require('mongoose')
// connect to mongodb database

const connectDB = async()=>{
    mongoose.connection.on('connected', ()=>console.log("database connected"))
 await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'lms'  // Explicitly set database name
    })
}

module.exports = {connectDB}