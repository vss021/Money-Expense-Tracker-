const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://saudvijaysingh:DJhzv0kb3o6Npa5L@cluster0.beegeiv.mongodb.net/?retryWrites=true&w=majority")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}