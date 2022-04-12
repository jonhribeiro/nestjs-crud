import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {} 

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    
    const createdUser = await this.userModel.create(data)

    return {
      ...createdUser,
      password: undefined,
    };
  }

  consultarTodosUsuarios() {
    return this.userModel.find()
  }

  findByEmail(id: string) {
    return this.userModel.findById(id);
  }
}
