import * as  mongoose from "mongoose";

export const UserEchema = new mongoose.Schema({
    email: String,
    // email: { type: String, unique: true },
    nome: String,
    password: String
}, {timestamps: true, collection: 'users' }) 
