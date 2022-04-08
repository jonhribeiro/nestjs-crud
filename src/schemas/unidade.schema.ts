import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UnidadeDocument = Unidade & Document;

@Schema({ timestamps: true })
export class Unidade {
    @Prop()
    nome: string;

    @Prop()
    descricao: string;

}

export const UnidadeSchema = SchemaFactory.createForClass(Unidade);