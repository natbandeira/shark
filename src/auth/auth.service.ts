import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthResponseDto } from './dto/auth.dto';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {
        this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME', 3600);
    }

    signIn(username: string, password: string): AuthResponseDto {
        const usuarioEncontrado = this.usuarioService.findByUsername(username);

        if (!usuarioEncontrado || !bcryptCompareSync (password, usuarioEncontrado.password)){
            throw new UnauthorizedException();
        }

        const payload = { sub: usuarioEncontrado.id, username: usuarioEncontrado.username};
        const token = this.jwtService.sign(payload);

        return { token, expiresIn: this.jwtExpirationTimeInSeconds }
 
    }
}
