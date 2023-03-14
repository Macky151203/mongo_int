import { MongoClient, ObjectId } from "mongodb"
import clientpromise from "@/lib/db";
export default async (req, res) => {
    try{
        const client= await clientpromise;
        const db= client.db("customers");
         await db.collection("customers").deleteOne({
            dat:'ok',
            
         });

        res.json({
            message:"successfully deleted"
        });
    }catch(e){
        console.log(e);
    }
}