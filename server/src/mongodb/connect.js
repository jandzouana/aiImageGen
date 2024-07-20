import mongoose from 'mongoose';

const connectDB = async (url) => {
    mongoose.set('strictQuery', true); // search functionality

    mongoose.connect(url).then(()=>console.log("MongoDB connected")).catch(e => console.error(e));
}

export default connectDB;
