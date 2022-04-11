import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEchema } from './entities/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserEchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
