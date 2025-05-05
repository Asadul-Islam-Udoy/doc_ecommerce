import mongoose from "mongoose"
export const DbConnection = async()=>{
   try{
     const conn = await mongoose.connect(process.env.MONGO_URL!);
     if(!conn){
        console.log('mongoose connection error!')
     }
     else{
        console.log(`mongoose connection successfully ${conn.connection.host}`)
     }
   }
   catch(error:any){
     console.log(error)
   }
}

