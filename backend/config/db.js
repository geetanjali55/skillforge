import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://geetanajali55_db_user:YFFHlWNyy9UwY1dD@cluster0.yw6n9yu.mongodb.net/L-M-S').then
    (() => {
        console.log("Connected to MongoDB");
    })
}