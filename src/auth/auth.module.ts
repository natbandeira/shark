import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [JwtModule.registerAsync({ 
    global: true,
    imports: [],
    useFactory: async (configService: ConfigService ) => ({
      secret: configService.get<string>('JWT_SECRET'),
      //+ antes de uma String: conversão implícita, transforma o resultado em number
      signOptions: {expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME', 3600)}
    }),
    inject: [ConfigService],
   }), UsuarioModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
