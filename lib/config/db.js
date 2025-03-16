import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://hiroshitomioka95:hiroshitomioka95@cluster0.vyf5u.mongodb.net/hirito-blog")
    console.log("DB connected")
}