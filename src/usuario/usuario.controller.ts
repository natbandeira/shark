import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() newUser: CreateUsuarioDto) {
    return this.usuarioService.create(newUser);
  }

  @Get()
  findAll(): CreateUsuarioDto[] {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): CreateUsuarioDto {
    return this.usuarioService.findById(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
