import Cust from "@/lib/schema";

// import main from "@/lib/db";
import clientpromise from "@/lib/db";

export default async (req,res)=>{
  // if(req.method==='POST'){
  //   main().catch(err=>console.log(err))
  //   const dat= req.body.dat
  //   const occ= req.body.occ
  //   const Cu= new Cust({
  //   name:dat,
  //   occupation:occ
  // });
  // Cu.save().then(()=>{
  //   res.status(200).json(Cu)
  // })
  // }
  try{
    const client= await clientpromise;
    const db= client.db("customers");
    const dat= req.body.dat;
    const occ= req.body.occ;
    const post = await db.collection("customers").insertOne({
      dat,occ,
    });
    res.json(post);
  }catch(e){
    console.log(e);
  }
};