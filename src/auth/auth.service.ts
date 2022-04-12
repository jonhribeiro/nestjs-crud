import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserToken } from './models/UserToken';
import { JwtService } from '@nestjs/jwt';
import { USerPayload } from './models/UserPayload';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}
    
    login(user: User): UserToken {
        const payload: USerPayload = {
            sub: user.id,
            email: user.email,
            nome: user.nome
        }
        const jwtToken = this.jwtService.sign(payload)
        return {
            access_token: jwtToken
        }
    }
    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined
                };
            }
        }
        throw new Error('Email ou password incorreto')
    }
}
