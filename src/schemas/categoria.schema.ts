import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriaDocument = Categoria & Document;

@Schema({ timestamps: true })
export class Categoria {
    @Prop()
    nome: string;

}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);