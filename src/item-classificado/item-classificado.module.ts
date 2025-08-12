import { Module } from '@nestjs/common';
import { ItemClassificadoService } from './item-classificado.service';
import { ItemClassificadoController } from './item-classificado.controller';

@Module({
  controllers: [ItemClassificadoController],
  providers: [ItemClassificadoService],
})
export class ItemClassificadoModule {}
