import { MongoClient } from "mongodb"
import { useState } from "react"



export default function Home({data}){
  const [dat,setdat]= useState('');
  const [occ,setocc]= useState('');
  const [db,setdb]= useState({})
  const handledelete= async()=>{
    const response= await fetch('api/delete',{
      method:'DELETE',
      body:JSON.stringify({dat,occ}),
      headers:{
        'Content-Type':'application/json',
    },
    })
    const out= response.json();
    console.log(out)
  }
  const handleread= async()=>{
    const response = await fetch('api/read')
    console.log("out of req")
    const readata= await response.json();
    setdb(readata)
    console.log(readata)
  }
  const handlesubmit= async()=>{
    const response= await fetch('api/addd'
    ,{
      method:'POST',
      body:JSON.stringify({dat,occ}),
      headers:{
        'Content-Type':'application/json',
    },
    }
    )
    const abc= await response.json();
    // setdb(abc)
    console.log(abc);
    
    
  }

  return (
    <>
      <div className="head">Mongo db</div>

      <input value={dat} onChange={(e)=>setdat(e.target.value)}  />
      <input value={occ} onChange={(e)=>setocc(e.target.value)}  />


      <button onClick={handlesubmit}>Submit</button>
      <button onClick={handleread}>read</button>
      <button onClick={handledelete}>Delete</button>
      {
        db && data.map((datas)=>{
          return(
            <div key={datas.dat}>
              <p>{datas.dat}||{datas.occ}</p>
            </div>
          )
        })
      }
    </>
  )
}

export async function getServerSideProps(){
  // const mongoclient = new MongoClient('mongodb+srv://subro:EHkder5CnMhYu6n1@cluster0.rlqrsbu.mongodb.net/customers?retryWrites=true&w=majority');
  const mongoclient = new MongoClient('mongodb://subro:EHkder5CnMhYu6n1@ac-w3n1juf-shard-00-00.rlqrsbu.mongodb.net:27017,ac-w3n1juf-shard-00-01.rlqrsbu.mongodb.net:27017,ac-w3n1juf-shard-00-02.rlqrsbu.mongodb.net:27017/customers?ssl=true&replicaSet=atlas-xbwk9d-shard-0&authSource=admin&retryWrites=true&w=majority');
  const response= await mongoclient.db().collection('customers').find({}).toArray();
  
  console.log(response)

  return{
    props:{data:JSON.parse(JSON.stringify(response))}
  }
  
}
//63c257bd46c65dbe29c51b0d