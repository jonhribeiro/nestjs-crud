import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaEchema } from './entities/categoria.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaEchema }])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
