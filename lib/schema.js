import mongoose from "mongoose";
const mySchema= new mongoose.Schema({
    
    name: String,
    occupation: String
});

module.exports =    mongoose.model('Cust') || mongoose.model('Cust',mySchema)