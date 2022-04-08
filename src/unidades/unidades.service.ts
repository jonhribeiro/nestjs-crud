import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { Unidade } from './entities/unidade.entity';
import { Model } from 'mongoose';
import { UnidadeDocument } from 'src/schemas/unidade.schema';

@Injectable()
export class UnidadesService {

  constructor(@InjectModel(Unidade.name) private unidadeModel: Model<UnidadeDocument>) {}

  create(createUnidadeDto: CreateUnidadeDto) {
    const unidade = new this.unidadeModel(createUnidadeDto)
    return unidade.save();
  }

  findAll() {
    return this.unidadeModel.find();
  }

  findOne(id: string) {
    return this.unidadeModel.findById(id);
  }

  update(id: string, updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadeModel.findByIdAndUpdate({_id: id}, {$set: updateUnidadeDto}, {new: true});
  }

  remove(id: string) {
    return this.unidadeModel.deleteOne({id}).exec();
  }
}
