import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Unidade } from './entities/unidade.entity';
import { UnidadeSchema } from 'src/schemas/unidade.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Unidade.name, schema: UnidadeSchema }])],
  controllers: [UnidadesController],
  providers: [UnidadesService]
})
export class UnidadesModule {}
