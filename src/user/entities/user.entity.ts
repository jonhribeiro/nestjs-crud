import { Document } from 'mongoose'

export class User extends Document {
    readonly _id: string
    email: string;
    password: string; 
    nome: string;
}