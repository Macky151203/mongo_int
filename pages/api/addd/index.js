import Cust from "@/lib/schema";

import main from "@/lib/db";

export default function getusers(req,res){
  if(req.method==='POST'){
    main().catch(err=>console.log(err))
    const dat= req.body.dat
    const occ= req.body.occ
    const Cu= new Cust({
    name:dat,
    occupation:occ
  });
  Cu.save().then(()=>{
    res.status(200).json(Cu)
  })
  }
}