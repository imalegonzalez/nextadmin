import mongoose from "mongoose"

export const connectToDb = async ()=> {
    const connection = {};

    //conectando a db
    try {
        //checkeando si ya existe una coneccion a db
        if(connection.isConnected) return;
         //conectando a db
       const db = await mongoose.connect(process.env.MONGO);
       connection.isConnected = db.connections[0].readyState;
    } catch (error){
        console.log(error)
        throw new Error(error);
    }
}