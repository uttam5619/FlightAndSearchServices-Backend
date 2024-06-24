import mongoose from 'mongoose';


const connectDB = async () => {

    const isConnected = await mongoose.connect(`${process.env.MONGODB_CONNECTION_SRING}`)
    if (isConnected) {
        console.log(`application connected successfully with database`)
        console.log(`${isConnected.connection.host}`)
    }else{
        console.log(`application failed to connect with database`)
    }

    return isConnected
}

export default connectDB

