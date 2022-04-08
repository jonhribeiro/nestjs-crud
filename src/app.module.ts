import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UnidadesModule } from './unidades/unidades.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://db:27017', { useNewUrlParser: true }),
    JogadoresModule,
    CategoriasModule,
    UnidadesModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
