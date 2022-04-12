import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresController } from './jogadores.controller';
import { JogadorEchema } from './interfaces/jogador.schema';
import { JogadoresService } from './jogadores.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Jogador', schema: JogadorEchema }])],
  controllers: [JogadoresController],
  providers: [JogadoresService]
})
export class JogadoresModule {}
