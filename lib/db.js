import mongoose from "mongoose";

const main = async()=>{
   await mongoose.connect('mongodb://subro:EHkder5CnMhYu6n1@ac-w3n1juf-shard-00-00.rlqrsbu.mongodb.net:27017,ac-w3n1juf-shard-00-01.rlqrsbu.mongodb.net:27017,ac-w3n1juf-shard-00-02.rlqrsbu.mongodb.net:27017/customers?ssl=true&replicaSet=atlas-xbwk9d-shard-0&authSource=admin&retryWrites=true&w=majority')
}
export default main;