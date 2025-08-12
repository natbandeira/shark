import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProcessoModule } from './processo/processo.module';
import { ItemClassificadoModule } from './item-classificado/item-classificado.module';

@Module({
  imports: [UsuarioModule, ClienteModule, ProcessoModule, ItemClassificadoModule],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
