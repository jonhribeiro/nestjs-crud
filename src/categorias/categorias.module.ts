import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categoria } from './entities/categoria.entity';
import { CategoriaSchema } from 'src/schemas/categoria.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Categoria.name, schema: CategoriaSchema }])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
