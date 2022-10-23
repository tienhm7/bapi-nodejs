import mongoose from 'mongoose';
import 'dotenv/config';

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log('Mongoose connect successfully!');
    } catch (error) {
        console.log('Mongoose connect failure!');
    }
}

export { connectMongoDB };
