import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemClassificadoService } from './item-classificado.service';
import { CreateItemClassificadoDto } from './dto/create-item-classificado.dto';
import { UpdateItemClassificadoDto } from './dto/update-item-classificado.dto';

@Controller('item-classificado')
export class ItemClassificadoController {
  constructor(private readonly itemClassificadoService: ItemClassificadoService) {}

  @Post()
  create(@Body() createItemClassificadoDto: CreateItemClassificadoDto) {
    return this.itemClassificadoService.create(createItemClassificadoDto);
  }

  @Get()
  findAll() {
    return this.itemClassificadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemClassificadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemClassificadoDto: UpdateItemClassificadoDto) {
    return this.itemClassificadoService.update(+id, updateItemClassificadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemClassificadoService.remove(+id);
  }
}
