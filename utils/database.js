import mongoose from "mongoose";

let isConnected = false;

export const connects = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('Database is connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('Database is connected.');

    }catch(error){
        console.log(error);
    }
}