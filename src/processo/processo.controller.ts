import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { CreateProcessoDto } from './dto/create-processo.dto';
import { UpdateProcessoDto } from './dto/update-processo.dto';

@Controller('processo')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @Post()
  create(@Body() createProcessoDto: CreateProcessoDto) {
    return this.processoService.create(createProcessoDto);
  }

  @Get()
  findAll() {
    return this.processoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcessoDto: UpdateProcessoDto) {
    return this.processoService.update(+id, updateProcessoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processoService.remove(+id);
  }
}
