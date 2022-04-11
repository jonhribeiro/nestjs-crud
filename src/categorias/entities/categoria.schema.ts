import * as  mongoose from "mongoose";

export const CategoriaEchema = new mongoose.Schema({
    nome: String,
}, {timestamps: true, collection: 'categorias' }) 
