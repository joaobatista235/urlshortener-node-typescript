import { config } from "../config/Constant";
import mongoose from "mongoose";

export class MongoConnection {
    public async connect(): Promise<void> {
        const options = { useNewUrlParser: true, useUnifiedTopology: true }
        try {
            await mongoose.connect(config.MONGO_CONNECTION, options)
        } catch (err) {
            console.log(err.message)
            process.exit(1)
        }
    }
}