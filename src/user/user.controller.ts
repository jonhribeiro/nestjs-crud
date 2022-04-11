import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Get()
  async consultarUsuarios() {
      return await this.userService.consultarTodosUsuarios()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findByEmail(id);
  }

}
