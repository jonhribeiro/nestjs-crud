import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CategoriaDocument } from 'src/schemas/categoria.schema';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  constructor(@InjectModel(Categoria.name) private categoriaModel: Model<CategoriaDocument>) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    const user = new this.categoriaModel(createCategoriaDto)
    return user.save();
  }

  findAll() {
    return this.categoriaModel.find();
  }

  findOne(id: string) {
    return this.categoriaModel.findById(id);
  }

  update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaModel.findByIdAndUpdate( {_id: id }, { $set: updateCategoriaDto }, { new: true } )
  }

  remove(id: string) {
    return this.categoriaModel.deleteOne({id}).exec()
  }
}
