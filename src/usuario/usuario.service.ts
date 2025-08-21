import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { v4 as uuidv4} from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';


@Injectable()
export class UsuarioService {
  private usuarios: UsuarioDto[] = [];

  create(newUser: CreateUsuarioDto) {
    newUser.id = uuidv4();
    newUser.password = bcryptHashSync(newUser.password, 10);
    this.usuarios.push(newUser);
  }

  findAll() {
    return this.usuarios;
  }

  findById(id: string): UsuarioDto {
    const usuarioEncontrado = this.usuarios.filter( u => u.id === id);
    
    if (usuarioEncontrado.length) {
      return usuarioEncontrado[0];
    }

    throw new NotFoundException(`Usuário de ID ${id} não encontrado.`)
    // return `This action returns a #${id} usuario`;
  }

  findByUsername(username: string): UsuarioDto | undefined {
    return this.usuarios.find(u => u.username === username);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuario`;
  }
}

