import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProcessoModule } from './processo/processo.module';
import { ItemClassificadoModule } from './item-classificado/item-classificado.module';
import { UsuarioService } from './usuario/usuario.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsuarioModule, ClienteModule, ProcessoModule, ItemClassificadoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
