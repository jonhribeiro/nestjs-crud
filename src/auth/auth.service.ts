import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        return user
        if (user) {
            const isPasswordValid = bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined
                }
            }
        }
        throw new Error('Email ou password incorreto')
    }
}
