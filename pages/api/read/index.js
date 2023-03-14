import main from "@/lib/db";

import { MongoClient, ObjectId } from "mongodb"
import clientpromise from "@/lib/db";

export default async (req, res) => {
    try{
        const client= await clientpromise;
        const db= client.db("customers");
         await db.collection("customers").updateOne({
            _id: new ObjectId('6410024aaf52c5cde4a52fd1'),
         },
            {$set:{dat:"final you",
                occ:"doen okk"
            }
        }
         );

        res.json({
            message:"success"
        });
    }catch(e){
        console.log(e);
    }
}